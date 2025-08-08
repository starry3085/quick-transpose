import React, { useState } from 'react';
import { 
  Card, 
  Select, 
  Switch, 
  Button, 
  Tag, 
  MessagePlugin
} from 'tdesign-react';
import { ArrowRightIcon } from 'tdesign-icons-react';
import { useAppContext } from '../App';
import { 
  TransposeEngine, 
  SIMPLE_KEYS, 
  DEGREE_NAMES,
  COMMON_PROGRESSIONS
} from '../utils/shared-import';
import type { KeyType } from '../utils/shared-import';
import './DictionaryTab.less';

const { Option } = Select;

const DictionaryTab: React.FC = () => {
  const { fillProgression } = useAppContext();
  const [selectedKey, setSelectedKey] = useState<KeyType>('C');
  const [isMinor, setIsMinor] = useState(false);

  const chords = TransposeEngine.getChordsByKey(selectedKey, isMinor);
  const romanNumerals = TransposeEngine.getRomanNumerals(isMinor);

  // 处理选择器变化
  const handleKeyChange = (value: string | number) => {
    setSelectedKey(value as KeyType);
  };

  const handleFillToTransposer = (degree: number) => {
    fillProgression(degree.toString());
    MessagePlugin.success(`已填入第${degree}级和弦到转调工具`);
  };

  const handleQuickFill = (progression: string) => {
    fillProgression(progression);
    MessagePlugin.success('已填入和弦进行到转调工具');
  };

  return (
    <div className="dictionary-tab">
      <div className="responsive-grid grid-1">
        {/* 筛选区域 */}
        <Card title="调式选择" className="filter-card">
          <div className="filter-section">
            <div className="key-selection responsive-grid grid-2">
              <div className="key-group">
                <label className="form-label">调</label>
                <Select 
                  value={selectedKey} 
                  onChange={handleKeyChange}
                  size="large"
                >
                  {SIMPLE_KEYS.map(key => (
                    <Option key={key} value={key}>{key}</Option>
                  ))}
                </Select>
              </div>
              
              <div className="switch-group">
                <Switch
                  value={isMinor}
                  onChange={setIsMinor}
                  label="小调"
                  size="large"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* 度数表 */}
        <Card 
          title={`${selectedKey}${isMinor ? '小调' : '大调'} 和弦表`}
          className="chords-card"
        >
          <div className="chords-list">
            {chords.map((chord, index) => (
              <div key={index} className="chord-row">
                <div className="chord-info">
                  <div className="degree-badge">
                    <Tag variant="outline" size="large">
                      {index + 1}
                    </Tag>
                  </div>
                  <div className="chord-details">
                    <div className="chord-name">{chord}</div>
                    <div className="chord-meta">
                      <span className="roman">{romanNumerals[index]}</span>
                      <span className="separator">·</span>
                      <span className="degree-name">{DEGREE_NAMES[index]}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="text"
                  size="small"
                  onClick={() => handleFillToTransposer(index + 1)}
                  icon={<ArrowRightIcon />}
                >
                  填入
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* 和弦标记说明 */}
        <Card title="和弦标记说明" className="info-card">
          <div className="chord-types">
            <div className="type-row">
              <span className="type-label">大三和弦</span>
              <span className="type-examples">C, F, G</span>
            </div>
            <div className="type-row">
              <span className="type-label">小三和弦</span>
              <span className="type-examples">Dm, Em, Am</span>
            </div>
            <div className="type-row">
              <span className="type-label">减三和弦</span>
              <span className="type-examples">Bdim</span>
            </div>
            <div className="type-row">
              <span className="type-label">七和弦</span>
              <span className="type-examples">C7, Dm7, G7</span>
            </div>
          </div>
        </Card>

        {/* 快捷操作 */}
        <Card title="快捷填入" className="quick-actions-card">
          <div className="quick-actions-grid responsive-grid grid-2">
            <Button
              variant="outline"
              onClick={() => handleQuickFill('1 4 5 1')}
            >
              I-IV-V-I
            </Button>
            <Button
              variant="outline"
              onClick={() => handleQuickFill('6 4 1 5')}
            >
              vi-IV-I-V
            </Button>
            <Button
              variant="outline"
              onClick={() => handleQuickFill('1 6 2 5')}
            >
              I-vi-ii-V
            </Button>
            <Button
              variant="outline"
              onClick={() => handleQuickFill('4 5 3 6 2 5 1')}
            >
              卡农进行
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DictionaryTab;