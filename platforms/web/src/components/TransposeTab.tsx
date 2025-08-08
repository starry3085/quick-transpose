import React, { useState, useCallback, useEffect } from 'react';
import { 
  Card, 
  Input, 
  Select, 
  Switch, 
  Button, 
  Tag, 
  Space, 
  Collapse,
  MessagePlugin
} from 'tdesign-react';
import { CopyIcon, SwapIcon, RefreshIcon } from 'tdesign-icons-react';
import { useAppContext } from '../App';
import { TransposeEngine, SIMPLE_KEYS, COMMON_PROGRESSIONS, createStorageManager, debounce } from '../utils/shared-import';
import type { KeyType, TransposeSettings } from '../utils/shared-import';
import './TransposeTab.less';

const { Option } = Select;
const { CollapsePanel } = Collapse;

const TransposeTab: React.FC = () => {
  const { fillProgressionData, clearFillData } = useAppContext();
  const [progression, setProgression] = useState('');
  const [sourceKey, setSourceKey] = useState<KeyType>('C');
  const [targetKey, setTargetKey] = useState<KeyType>('G');
  const [isMinor, setIsMinor] = useState(false);
  const [useSeventhChords, setUseSeventhChords] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [recentProgressions, setRecentProgressions] = useState<string[]>([]);

  const storageManager = createStorageManager();

  // 加载设置
  useEffect(() => {
    const settings = storageManager.getTransposeSettings();
    if (settings) {
      setSourceKey(settings.sourceKey);
      setTargetKey(settings.targetKey);
      setIsMinor(settings.isMinor);
      setUseSeventhChords(settings.useSeventhChords || false);
    }
    
    const recent = storageManager.getRecentProgressions();
    setRecentProgressions(recent);
  }, []);

  // 处理从和弦字典填入的数据
  useEffect(() => {
    if (fillProgressionData) {
      setProgression(fillProgressionData);
      storageManager.addRecentProgression(fillProgressionData);
      setRecentProgressions(storageManager.getRecentProgressions());
      clearFillData(); // 清除填入数据
      MessagePlugin.success('已从和弦字典填入进行');
    }
  }, [fillProgressionData, clearFillData, storageManager]);

  // 保存设置
  const saveSettings = useCallback(() => {
    const settings: TransposeSettings = {
      sourceKey,
      targetKey,
      isMinor,
      useSeventhChords
    };
    storageManager.saveTransposeSettings(settings);
  }, [sourceKey, targetKey, isMinor, useSeventhChords, storageManager]);

  // 防抖保存设置
  const debouncedSaveSettings = useCallback(
    debounce(saveSettings, 500),
    [saveSettings]
  );

  useEffect(() => {
    debouncedSaveSettings();
  }, [sourceKey, targetKey, isMinor, useSeventhChords, debouncedSaveSettings]);

  // 处理选择器变化
  const handleSourceKeyChange = (value: string | number) => {
    setSourceKey(value as KeyType);
  };

  const handleTargetKeyChange = (value: string | number) => {
    setTargetKey(value as KeyType);
  };

  // 执行转调
  const result = TransposeEngine.transpose({
    progression,
    sourceKey,
    targetKey,
    isMinor,
    useSeventhChords
  });

  // 复制结果
  const handleCopy = () => {
    if (result.success && result.data.length > 0) {
      const chordString = result.data.map(r => r.chord).join(' ');
      navigator.clipboard.writeText(chordString).then(() => {
        MessagePlugin.success('已复制到剪贴板');
      }).catch(() => {
        MessagePlugin.error('复制失败');
      });
    }
  };

  // 交换调性
  const handleSwapKeys = () => {
    const temp = sourceKey;
    setSourceKey(targetKey);
    setTargetKey(temp);
  };

  // 填入常用进行
  const handleFillProgression = (value: string) => {
    setProgression(value);
    storageManager.addRecentProgression(value);
    setRecentProgressions(storageManager.getRecentProgressions());
  };

  // 清空输入
  const handleClear = () => {
    setProgression('');
  };

  return (
    <div className="transpose-tab">
      <div className="responsive-grid grid-1">
        {/* 输入区域 */}
        <Card title="和弦进行输入" className="input-card">
          <div className="input-section">
            <div className="progression-input">
              <Input
                placeholder="例如：4 5 3 6 2 5 1"
                value={progression}
                onChange={setProgression}
                clearable
                size="large"
              />
              <div className="input-actions">
                <Button 
                  variant="outline" 
                  size="small" 
                  onClick={handleClear}
                  icon={<RefreshIcon />}
                >
                  清空
                </Button>
              </div>
            </div>
            
            <div className="key-selection responsive-grid grid-2">
              <div className="key-group">
                <label className="form-label">源调</label>
                <div className="key-input-group">
                  <Select 
                    value={sourceKey} 
                    onChange={handleSourceKeyChange}
                    size="large"
                  >
                    {SIMPLE_KEYS.map(key => (
                      <Option key={key} value={key}>{key}</Option>
                    ))}
                  </Select>
                  <Button 
                    variant="outline" 
                    size="large"
                    onClick={handleSwapKeys}
                    icon={<SwapIcon />}
                  />
                </div>
              </div>
              
              <div className="key-group">
                <label className="form-label">目标调</label>
                <Select 
                  value={targetKey} 
                  onChange={handleTargetKeyChange}
                  size="large"
                >
                  {SIMPLE_KEYS.map(key => (
                    <Option key={key} value={key}>{key}</Option>
                  ))}
                </Select>
              </div>
            </div>
            
            <div className="options-row">
              <div className="switch-group">
                <Switch
                  value={isMinor}
                  onChange={setIsMinor}
                  label="小调"
                />
              </div>
              <div className="switch-group">
                <Switch
                  value={useSeventhChords}
                  onChange={setUseSeventhChords}
                  label="七和弦"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* 常用进行 */}
        <Card title="常用走向" className="progressions-card">
          <div className="progressions-grid">
            {COMMON_PROGRESSIONS.map(prog => (
              <Tag
                key={prog.label}
                variant="outline"
                className="progression-tag"
                onClick={() => handleFillProgression(prog.value)}
              >
                {prog.label}
              </Tag>
            ))}
          </div>
          
          {recentProgressions.length > 0 && (
            <div className="recent-section">
              <div className="section-title">最近使用</div>
              <div className="progressions-grid">
                {recentProgressions.slice(0, 5).map((prog, index) => (
                  <Tag
                    key={index}
                    variant="light-outline"
                    className="progression-tag recent"
                    onClick={() => handleFillProgression(prog)}
                  >
                    {prog}
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* 转换结果 */}
        {result.success && result.data.length > 0 && (
          <Card 
            title="转换结果" 
            className="result-card"
            actions={
              <Button 
                variant="outline" 
                size="small"
                onClick={handleCopy}
                icon={<CopyIcon />}
              >
                复制
              </Button>
            }
          >
            <div className="result-content">
              <div className="chords-display">
                {result.data.map((item, index) => (
                  <div key={index} className="chord-item">
                    <Tag size="large" className="chord-tag">
                      {item.chord}
                    </Tag>
                    <div className="roman-numeral">{item.roman}</div>
                  </div>
                ))}
              </div>
              
              <div className="result-actions">
                <Button
                  variant="text"
                  onClick={() => setShowComparison(!showComparison)}
                >
                  {showComparison ? '隐藏' : '显示'}对照
                </Button>
              </div>
            </div>
            
            {showComparison && (
              <Collapse className="comparison-collapse">
                <CollapsePanel header="原调→目标调对照">
                  <div className="comparison-list">
                    {result.data.map((item, index) => (
                      <div key={index} className="comparison-item">
                        <span className="original">{item.original}</span>
                        <span className="arrow">→</span>
                        <span className="target">{item.chord}</span>
                      </div>
                    ))}
                  </div>
                </CollapsePanel>
              </Collapse>
            )}
          </Card>
        )}

        {/* 错误提示 */}
        {!result.success && progression.trim() && (
          <Card className="error-card">
            <div className="error-content">
              <span className="error-text">{result.error}</span>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TransposeTab;