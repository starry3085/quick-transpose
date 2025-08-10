/**
 * 纯JavaScript移调器应用
 * 替代React版本，使用原生DOM操作和事件处理
 */

import { TransposeEngine } from './shared/utils/transpose.js';
import { CHORD_MAPS, ROMAN_NUMERALS, COMMON_PROGRESSIONS } from './shared/constants/chord-data.js';

// 应用状态
class AppState {
    constructor() {
        this.activeTab = 'transpose';
        this.progression = '';
        this.sourceKey = 'C';
        this.targetKey = 'G';
        this.isMinor = false;
        this.useSeventhChords = false;
        this.showComparison = false;
        this.dictKey = 'C';
        this.dictIsMinor = false;
        this.theme = 'light';
    }
}

// 全局应用实例
class TransposeApp {
    constructor() {
        this.state = new AppState();
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateUI();
        console.log('移调器应用已初始化');
    }

    // 绑定所有事件
    bindEvents() {
        // 标签页切换
        document.getElementById('tab-transpose').addEventListener('click', () => this.switchTab('transpose'));
        document.getElementById('tab-dictionary').addEventListener('click', () => this.switchTab('dictionary'));

        // 转换器相关事件
        document.getElementById('progression').addEventListener('input', (e) => {
            this.state.progression = e.target.value;
            this.updateTransposeResult();
        });

        document.getElementById('source-key').addEventListener('change', (e) => {
            this.state.sourceKey = e.target.value;
            this.updateTransposeResult();
        });

        document.getElementById('target-key').addEventListener('change', (e) => {
            this.state.targetKey = e.target.value;
            this.updateTransposeResult();
        });

        // 开关事件
        document.getElementById('minor-switch').addEventListener('click', () => {
            this.toggleSwitch('minor-switch');
            this.state.isMinor = !this.state.isMinor;
            this.updateTransposeResult();
        });

        document.getElementById('seventh-switch').addEventListener('click', () => {
            this.toggleSwitch('seventh-switch');
            this.state.useSeventhChords = !this.state.useSeventhChords;
            this.updateTransposeResult();
        });

        // 常用进行点击
        document.querySelectorAll('[data-progression]').forEach(badge => {
            badge.addEventListener('click', (e) => {
                const progression = e.target.getAttribute('data-progression');
                this.state.progression = progression;
                document.getElementById('progression').value = progression;
                this.updateTransposeResult();
            });
        });

        // 复制按钮
        document.getElementById('copy-btn').addEventListener('click', () => this.copyResult());

        // 对照折叠
        document.getElementById('comparison-toggle').addEventListener('click', () => this.toggleComparison());

        // 字典相关事件
        document.getElementById('dict-key').addEventListener('change', (e) => {
            this.state.dictKey = e.target.value;
            this.updateDictionary();
        });

        document.getElementById('dict-minor-switch').addEventListener('click', () => {
            this.toggleSwitch('dict-minor-switch');
            this.state.dictIsMinor = !this.state.dictIsMinor;
            this.updateDictionary();
        });

        // 快捷填入按钮
        document.querySelectorAll('[data-fill]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const progression = e.target.getAttribute('data-fill');
                this.fillToTransposer(progression);
            });
        });

        // 设置相关事件
        document.getElementById('settings-btn').addEventListener('click', () => this.openSettings());
        document.getElementById('close-settings').addEventListener('click', () => this.closeSettings());
        document.getElementById('settings-backdrop').addEventListener('click', () => this.closeSettings());

        document.getElementById('theme-switch').addEventListener('click', () => {
            this.toggleSwitch('theme-switch');
            this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
            this.updateTheme();
        });
    }

    // 标签页切换
    switchTab(tab) {
        this.state.activeTab = tab;
        
        // 更新标签按钮状态
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('tab-active'));
        document.getElementById(`tab-${tab}`).classList.add('tab-active');
        
        // 显示/隐藏内容
        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
        document.getElementById(`${tab}-tab`).classList.remove('hidden');
    }

    // 开关切换
    toggleSwitch(switchId) {
        const switchEl = document.getElementById(switchId);
        const isChecked = switchEl.getAttribute('data-checked') === 'true';
        const newState = !isChecked;
        
        switchEl.setAttribute('data-checked', newState.toString());
        const thumb = switchEl.querySelector('.switch-thumb');
        
        if (newState) {
            switchEl.classList.remove('bg-gray-200');
            switchEl.classList.add('bg-emerald-600');
            thumb.classList.remove('translate-x-0.5');
            thumb.classList.add('translate-x-5');
        } else {
            switchEl.classList.remove('bg-emerald-600');
            switchEl.classList.add('bg-gray-200');
            thumb.classList.remove('translate-x-5');
            thumb.classList.add('translate-x-0.5');
        }
    }

    // 更新转调结果
    updateTransposeResult() {
        if (!this.state.progression.trim()) {
            document.getElementById('result-card').classList.add('hidden');
            document.getElementById('comparison-section').classList.add('hidden');
            return;
        }

        try {
            const result = TransposeEngine.transpose({
                progression: this.state.progression,
                sourceKey: this.state.sourceKey,
                targetKey: this.state.targetKey,
                isMinor: this.state.isMinor,
                useSeventhChords: this.state.useSeventhChords
            });

            if (result.success && result.data.length > 0) {
                this.displayResult(result.data);
                document.getElementById('result-card').classList.remove('hidden');
                document.getElementById('comparison-section').classList.remove('hidden');
            } else {
                document.getElementById('result-card').classList.add('hidden');
                document.getElementById('comparison-section').classList.add('hidden');
            }
        } catch (error) {
            console.error('转调失败:', error);
            document.getElementById('result-card').classList.add('hidden');
            document.getElementById('comparison-section').classList.add('hidden');
        }
    }

    // 显示转调结果
    displayResult(chords) {
        const resultContainer = document.getElementById('result-chords');
        const comparisonContainer = document.getElementById('comparison-list');
        
        // 清空之前的结果
        resultContainer.innerHTML = '';
        comparisonContainer.innerHTML = '';
        
        // 显示和弦结果
        chords.forEach(item => {
            const chordElement = document.createElement('div');
            chordElement.className = 'text-center';
            chordElement.innerHTML = `
                <span class="badge badge-secondary mb-1">${item.chord}</span>
                <div class="text-xs text-gray-500">${item.roman}</div>
            `;
            resultContainer.appendChild(chordElement);
            
            // 添加对照信息
            const comparisonElement = document.createElement('div');
            comparisonElement.className = 'flex justify-between items-center text-sm';
            comparisonElement.innerHTML = `
                <span>${item.original}</span>
                <span>→</span>
                <span class="font-medium">${item.chord}</span>
            `;
            comparisonContainer.appendChild(comparisonElement);
        });
    }

    // 复制结果
    copyResult() {
        const chords = Array.from(document.querySelectorAll('#result-chords .badge')).map(el => el.textContent);
        const chordString = chords.join(' ');
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(chordString).then(() => {
                this.showToast('已复制到剪贴板');
            });
        } else {
            // 降级方案
            const textArea = document.createElement('textarea');
            textArea.value = chordString;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showToast('已复制到剪贴板');
        }
    }

    // 切换对照显示
    toggleComparison() {
        this.state.showComparison = !this.state.showComparison;
        const content = document.getElementById('comparison-content');
        const icon = document.querySelector('#comparison-toggle svg');
        
        if (this.state.showComparison) {
            content.classList.remove('closed');
            content.classList.add('open');
            icon.style.transform = 'rotate(180deg)';
        } else {
            content.classList.remove('open');
            content.classList.add('closed');
            icon.style.transform = 'rotate(0deg)';
        }
    }

    // 更新字典显示
    updateDictionary() {
        const chordMap = this.state.dictIsMinor ? CHORD_MAPS.minor : CHORD_MAPS.major;
        const chords = chordMap[this.state.dictKey];
        const romanNumerals = ROMAN_NUMERALS[this.state.dictIsMinor ? 'minor' : 'major'];
        const degreeNames = ['一度', '二度', '三度', '四度', '五度', '六度', '七度'];
        
        // 更新标题
        const title = `${this.state.dictKey}${this.state.dictIsMinor ? '小调' : '大调'} 和弦表`;
        document.getElementById('chord-table-title').textContent = title;
        
        // 更新和弦列表
        const chordList = document.getElementById('chord-list');
        chordList.innerHTML = '';
        
        chords.forEach((chord, index) => {
            const chordElement = document.createElement('div');
            chordElement.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg';
            chordElement.innerHTML = `
                <div class="flex items-center space-x-3">
                    <span class="badge badge-outline w-8 text-center">${index + 1}</span>
                    <div>
                        <div class="font-medium">${chord}</div>
                        <div class="text-xs text-gray-500">
                            ${romanNumerals[index]} · ${degreeNames[index]}
                        </div>
                    </div>
                </div>
                <button class="btn btn-ghost p-2" data-degree="${index + 1}">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            `;
            
            // 绑定点击事件
            const button = chordElement.querySelector('button');
            button.addEventListener('click', () => {
                this.fillToTransposer((index + 1).toString());
            });
            
            chordList.appendChild(chordElement);
        });
    }

    // 填入到转换器
    fillToTransposer(progression) {
        this.state.progression = progression;
        document.getElementById('progression').value = progression;
        this.switchTab('transpose');
        this.updateTransposeResult();
    }

    // 设置相关方法
    openSettings() {
        const modal = document.getElementById('settings-modal');
        const panel = document.getElementById('settings-panel');
        
        modal.classList.remove('hidden');
        setTimeout(() => {
            panel.style.transform = 'translateX(0)';
        }, 10);
    }

    closeSettings() {
        const modal = document.getElementById('settings-modal');
        const panel = document.getElementById('settings-panel');
        
        panel.style.transform = 'translateX(100%)';
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    // 主题切换
    updateTheme() {
        if (this.state.theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        
        // 保存到本地存储
        localStorage.setItem('transpose-theme', this.state.theme);
    }

    // 显示Toast通知
    showToast(message) {
        const toast = document.getElementById('toast');
        const messageEl = document.getElementById('toast-message');
        
        messageEl.textContent = message;
        toast.classList.remove('translate-x-full');
        
        setTimeout(() => {
            toast.classList.add('translate-x-full');
        }, 2000);
    }

    // 更新UI状态
    updateUI() {
        // 初始化转换器状态
        document.getElementById('progression').value = this.state.progression;
        document.getElementById('source-key').value = this.state.sourceKey;
        document.getElementById('target-key').value = this.state.targetKey;
        
        // 初始化字典状态
        document.getElementById('dict-key').value = this.state.dictKey;
        this.updateDictionary();
        
        // 从本地存储加载主题
        const savedTheme = localStorage.getItem('transpose-theme');
        if (savedTheme) {
            this.state.theme = savedTheme;
            this.updateTheme();
            
            if (savedTheme === 'dark') {
                this.toggleSwitch('theme-switch');
            }
        }
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    window.transposeApp = new TransposeApp();
});

// 导出供其他模块使用
export { TransposeApp };
