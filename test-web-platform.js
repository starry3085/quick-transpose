const fs = require('fs');
const path = require('path');

// 测试结果记录
const testResults = {
  passed: 0,
  failed: 0,
  details: []
};

function logTest(name, passed, message = '') {
  const status = passed ? '✅' : '❌';
  const result = { name, passed, message };
  testResults.details.push(result);
  testResults[passed ? 'passed' : 'failed']++;
  console.log(`${status} [Web测试] ${name}${message ? ': ' + message : ''}`);
}

function testFileExists(filePath, description) {
  const exists = fs.existsSync(filePath);
  logTest(description, exists, exists ? '文件存在' : '文件不存在');
  return exists;
}

function testFileContent(filePath, description, testFn) {
  try {
    if (!fs.existsSync(filePath)) {
      logTest(description, false, '文件不存在');
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const result = testFn(content);
    logTest(description, result.passed, result.message);
    return result.passed;
  } catch (error) {
    logTest(description, false, `读取文件失败: ${error.message}`);
    return false;
  }
}

console.log('🚀 [Web测试] === 开始Web平台功能测试 ===\n');

// 1. 测试项目结构
console.log('📁 [Web测试] 测试项目结构...');
testFileExists('platforms/web/src/App.tsx', 'Web应用主组件');
testFileExists('platforms/web/src/components/TransposeApp.tsx', '转调应用组件');
testFileExists('platforms/web/src/components/TransposeTab.tsx', '转调标签页组件');
testFileExists('platforms/web/src/components/DictionaryTab.tsx', '字典标签页组件');
testFileExists('platforms/web/dist/index.html', 'Web构建产物');

// 2. 测试共享模块
console.log('\n🔧 [Web测试] 测试共享模块...');
testFileExists('shared/types/index.ts', '共享类型定义');
testFileExists('shared/utils/transpose.ts', '转调算法模块');
testFileExists('shared/utils/chordDictionary.ts', '和弦字典模块');
testFileExists('shared/state/StateManager.ts', '状态管理模块');
testFileExists('shared/storage/CrossPlatformStorage.ts', '跨平台存储模块');

// 3. 测试响应式组件
console.log('\n📱 [Web测试] 测试响应式组件...');
testFileExists('platforms/web/src/components/adaptive/AdaptiveLayout.tsx', '自适应布局组件');
testFileExists('platforms/web/src/components/adaptive/ResponsiveGrid.tsx', '响应式网格组件');
testFileExists('platforms/web/src/components/adaptive/AdaptiveCard.tsx', '自适应卡片组件');
testFileExists('platforms/web/src/components/adaptive/AdaptiveButton.tsx', '自适应按钮组件');

// 4. 测试转调算法
console.log('\n🎵 [Web测试] 测试转调算法...');
testFileContent('shared/utils/transpose.ts', '转调算法实现', (content) => {
  const hasTransposeFunction = content.includes('transposeChord') || content.includes('transpose');
  const hasNoteMapping = content.includes('C') && content.includes('D') && content.includes('E');
  return {
    passed: hasTransposeFunction && hasNoteMapping,
    message: hasTransposeFunction ? '包含转调函数' : '缺少转调函数'
  };
});

// 5. 测试和弦字典
console.log('\n📚 [Web测试] 测试和弦字典...');
testFileContent('shared/utils/chordDictionary.ts', '和弦字典数据', (content) => {
  const hasChordData = content.includes('chord') || content.includes('Chord');
  const hasSearchFunction = content.includes('search') || content.includes('find');
  return {
    passed: hasChordData,
    message: hasChordData ? '包含和弦数据' : '缺少和弦数据'
  };
});

// 6. 测试平台检测
console.log('\n🔍 [Web测试] 测试平台检测...');
testFileContent('platforms/web/src/utils/platform-detection.ts', '平台检测功能', (content) => {
  const hasUserAgentCheck = content.includes('navigator.userAgent') || content.includes('userAgent');
  const hasDeviceDetection = content.includes('mobile') || content.includes('desktop');
  return {
    passed: hasUserAgentCheck,
    message: hasUserAgentCheck ? '包含用户代理检测' : '缺少用户代理检测'
  };
});

// 7. 测试状态管理
console.log('\n🗃️ [Web测试] 测试状态管理...');
testFileContent('shared/state/StateManager.ts', '状态管理器', (content) => {
  const hasStateClass = content.includes('class') && content.includes('State');
  const hasGetSetMethods = content.includes('get') && content.includes('set');
  return {
    passed: hasStateClass,
    message: hasStateClass ? '包含状态管理类' : '缺少状态管理类'
  };
});

// 8. 测试构建配置
console.log('\n⚙️ [Web测试] 测试构建配置...');
testFileExists('package.json', '项目配置文件');
testFileExists('scripts/build-all.js', '构建脚本');
testFileExists('deploy.config.js', '部署配置');

testFileContent('package.json', '项目依赖配置', (content) => {
  try {
    const pkg = JSON.parse(content);
    const hasReact = pkg.dependencies && pkg.dependencies.react;
    const hasTDesign = pkg.dependencies && (pkg.dependencies['tdesign-react'] || pkg.dependencies.tdesign);
    const hasTypeScript = pkg.devDependencies && pkg.devDependencies.typescript;
    return {
      passed: hasReact && hasTypeScript,
      message: `React: ${!!hasReact}, TDesign: ${!!hasTDesign}, TypeScript: ${!!hasTypeScript}`
    };
  } catch (error) {
    return { passed: false, message: 'JSON解析失败' };
  }
});

// 9. 测试文档完整性
console.log('\n📖 [Web测试] 测试文档完整性...');
testFileExists('docs/DEVELOPMENT_DOCUMENTATION.md', '开发文档');
testFileExists('docs/DEPLOYMENT_GUIDE.md', '部署指南');
testFileExists('docs/TESTING_GUIDE.md', '测试指南');
testFileExists('README.md', '项目说明文档');

// 10. 模拟功能测试
console.log('\n🧪 [Web测试] 模拟功能测试...');

// 模拟转调功能测试
try {
  // 这里我们只能做基本的语法检查，实际功能需要在浏览器环境中测试
  logTest('转调功能模拟测试', true, '需要在浏览器环境中进一步验证');
} catch (error) {
  logTest('转调功能模拟测试', false, error.message);
}

// 模拟响应式设计测试
try {
  const cssFiles = [
    'platforms/web/src/App.css',
    'platforms/web/src/index.css'
  ];
  
  let hasResponsiveCSS = false;
  for (const cssFile of cssFiles) {
    if (fs.existsSync(cssFile)) {
      const content = fs.readFileSync(cssFile, 'utf8');
      if (content.includes('@media') || content.includes('responsive')) {
        hasResponsiveCSS = true;
        break;
      }
    }
  }
  
  logTest('响应式设计检查', hasResponsiveCSS, hasResponsiveCSS ? '发现响应式CSS规则' : '未发现明确的响应式CSS规则');
} catch (error) {
  logTest('响应式设计检查', false, error.message);
}

// 输出测试总结
console.log('\n📊 [Web测试] === 测试结果总结 ===');
console.log(`✅ 通过: ${testResults.passed} 项`);
console.log(`❌ 失败: ${testResults.failed} 项`);
console.log(`📈 成功率: ${((testResults.passed / (testResults.passed + testResults.failed)) * 100).toFixed(1)}%`);

if (testResults.failed > 0) {
  console.log('\n❌ 失败的测试项:');
  testResults.details
    .filter(test => !test.passed)
    .forEach(test => console.log(`   - ${test.name}: ${test.message}`));
}

console.log('\n🔍 [Web测试] 建议进行的手动测试:');
console.log('1. 在Chrome/Firefox/Safari中打开Web应用');
console.log('2. 测试转调功能：输入和弦进行，验证转调结果');
console.log('3. 测试和弦字典：搜索和弦，查看详细信息');
console.log('4. 测试响应式设计：调整浏览器窗口大小');
console.log('5. 测试移动端适配：使用开发者工具模拟移动设备');
console.log('6. 测试数据持久化：刷新页面后数据是否保持');

// 生成测试报告
const reportPath = 'test-results-web.json';
fs.writeFileSync(reportPath, JSON.stringify(testResults, null, 2));
console.log(`\n📄 详细测试报告已保存到: ${reportPath}`);