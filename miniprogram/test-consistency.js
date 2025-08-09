// test-consistency.js
// 小程序端跨平台一致性测试
// 确保与Web端产生相同的转调结果

const TransposeEngine = require('./utils/transpose-engine.js')
const { CHORD_MAPS, ROMAN_NUMERALS } = require('./utils/constants.js')
const { errorHandler, ERROR_CODES } = require('./utils/error-handler.js')

/**
 * 测试用例数据
 */
const testCases = [
  // 基础转调测试
  {
    name: '基础大调转调 C->G',
    params: {
      progression: '1 4 5 1',
      sourceKey: 'C',
      targetKey: 'G',
      isMinor: false
    },
    expected: {
      success: true,
      chords: ['G', 'C', 'D', 'G']
    }
  },
  {
    name: '小调转调 A->D',
    params: {
      progression: '1 4 5 1',
      sourceKey: 'A',
      targetKey: 'D',
      isMinor: true
    },
    expected: {
      success: true,
      chords: ['Dm', 'Gm', 'Am', 'Dm']
    }
  },
  {
    name: '七和弦转调',
    params: {
      progression: '1 2 5',
      sourceKey: 'C',
      targetKey: 'F',
      isMinor: false,
      useSeventhChords: true
    },
    expected: {
      success: true,
      chords: ['F7', 'Gm7', 'C7']
    }
  },
  // 复杂进行测试
  {
    name: '卡农进行 C->D',
    params: {
      progression: '4 5 3 6 2 5 1',
      sourceKey: 'C',
      targetKey: 'D',
      isMinor: false
    },
    expected: {
      success: true,
      chords: ['G', 'A', 'F#m', 'Bm', 'Em', 'A', 'D']
    }
  },
  {
    name: '爵士进行 C->Bb',
    params: {
      progression: '2 5 1',
      sourceKey: 'C',
      targetKey: 'Bb',
      isMinor: false
    },
    expected: {
      success: true,
      chords: ['Cm', 'F', 'Bb']
    }
  },
  // 错误处理测试
  {
    name: '空进行错误',
    params: {
      progression: '',
      sourceKey: 'C',
      targetKey: 'G',
      isMinor: false
    },
    expected: {
      success: false,
      error: '和弦进行不能为空'
    }
  },
  {
    name: '无效调性错误',
    params: {
      progression: '1 4 5',
      sourceKey: 'X',
      targetKey: 'G',
      isMinor: false
    },
    expected: {
      success: false,
      error: '不支持的调性'
    }
  },
  // 边界情况测试
  {
    name: '无效度数处理',
    params: {
      progression: '1 8 5 0',
      sourceKey: 'C',
      targetKey: 'G',
      isMinor: false
    },
    expected: {
      success: true,
      chords: ['G', '8', 'D', '0']
    }
  },
  {
    name: '混合有效无效输入',
    params: {
      progression: '1 abc 4 xyz 5',
      sourceKey: 'C',
      targetKey: 'F',
      isMinor: false
    },
    expected: {
      success: true,
      chords: ['F', 'abc', 'Bb', 'xyz', 'C']
    }
  }
]

/**
 * 执行单个测试用例
 */
function runTestCase(testCase) {
  console.log(`\n🧪 测试: ${testCase.name}`)
  
  try {
    const result = TransposeEngine.transpose(testCase.params)
    
    // 检查成功状态
    if (result.success !== testCase.expected.success) {
      console.error(`❌ 成功状态不匹配: 期望 ${testCase.expected.success}, 实际 ${result.success}`)
      return false
    }
    
    // 检查错误信息
    if (!testCase.expected.success) {
      if (result.error !== testCase.expected.error) {
        console.error(`❌ 错误信息不匹配: 期望 "${testCase.expected.error}", 实际 "${result.error}"`)
        return false
      }
      console.log(`✅ 错误处理正确: ${result.error}`)
      return true
    }
    
    // 检查转调结果
    if (testCase.expected.chords) {
      const actualChords = result.data.map(item => item.chord)
      
      if (actualChords.length !== testCase.expected.chords.length) {
        console.error(`❌ 和弦数量不匹配: 期望 ${testCase.expected.chords.length}, 实际 ${actualChords.length}`)
        return false
      }
      
      for (let i = 0; i < actualChords.length; i++) {
        if (actualChords[i] !== testCase.expected.chords[i]) {
          console.error(`❌ 第${i+1}个和弦不匹配: 期望 "${testCase.expected.chords[i]}", 实际 "${actualChords[i]}"`)
          return false
        }
      }
      
      console.log(`✅ 转调结果正确: ${actualChords.join(' ')}`)
    }
    
    return true
  } catch (error) {
    console.error(`❌ 测试执行异常:`, error)
    return false
  }
}

/**
 * 测试所有调性组合
 */
function testAllKeyCombinations() {
  console.log('\n🔄 测试所有调性组合...')
  
  const keys = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B']
  let totalTests = 0
  let passedTests = 0
  
  keys.forEach(sourceKey => {
    keys.forEach(targetKey => {
      // 测试大调
      totalTests++
      const majorResult = TransposeEngine.transpose({
        progression: '1 4 5 1',
        sourceKey,
        targetKey,
        isMinor: false
      })
      
      if (majorResult.success && majorResult.data.length === 4) {
        passedTests++
      } else {
        console.error(`❌ 大调转调失败: ${sourceKey} -> ${targetKey}`)
      }
      
      // 测试小调
      totalTests++
      const minorResult = TransposeEngine.transpose({
        progression: '1 4 5 1',
        sourceKey,
        targetKey,
        isMinor: true
      })
      
      if (minorResult.success && minorResult.data.length === 4) {
        passedTests++
      } else {
        console.error(`❌ 小调转调失败: ${sourceKey} -> ${targetKey}`)
      }
    })
  })
  
  console.log(`📊 调性组合测试结果: ${passedTests}/${totalTests} 通过`)
  return passedTests === totalTests
}

/**
 * 测试工具函数
 */
function testUtilityFunctions() {
  console.log('\n🔧 测试工具函数...')
  
  let allPassed = true
  
  // 测试 getChordsByKey
  const cMajorChords = TransposeEngine.getChordsByKey('C', false)
  const expectedCMajor = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim']
  
  if (JSON.stringify(cMajorChords) !== JSON.stringify(expectedCMajor)) {
    console.error('❌ getChordsByKey (C大调) 失败')
    allPassed = false
  } else {
    console.log('✅ getChordsByKey (C大调) 通过')
  }
  
  const aMinorChords = TransposeEngine.getChordsByKey('A', true)
  const expectedAMinor = ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']
  
  if (JSON.stringify(aMinorChords) !== JSON.stringify(expectedAMinor)) {
    console.error('❌ getChordsByKey (A小调) 失败')
    allPassed = false
  } else {
    console.log('✅ getChordsByKey (A小调) 通过')
  }
  
  // 测试 getRomanNumerals
  const majorNumerals = TransposeEngine.getRomanNumerals(false)
  const expectedMajorNumerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']
  
  if (JSON.stringify(majorNumerals) !== JSON.stringify(expectedMajorNumerals)) {
    console.error('❌ getRomanNumerals (大调) 失败')
    allPassed = false
  } else {
    console.log('✅ getRomanNumerals (大调) 通过')
  }
  
  const minorNumerals = TransposeEngine.getRomanNumerals(true)
  const expectedMinorNumerals = ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']
  
  if (JSON.stringify(minorNumerals) !== JSON.stringify(expectedMinorNumerals)) {
    console.error('❌ getRomanNumerals (小调) 失败')
    allPassed = false
  } else {
    console.log('✅ getRomanNumerals (小调) 通过')
  }
  
  // 测试批量转调
  const progressions = ['1 4 5 1', '2 5 1', '6 4 1 5']
  const batchResults = TransposeEngine.batchTranspose(progressions, 'C', 'G', false)
  
  if (batchResults.length !== 3 || !batchResults.every(r => r.success)) {
    console.error('❌ batchTranspose 失败')
    allPassed = false
  } else {
    console.log('✅ batchTranspose 通过')
  }
  
  return allPassed
}

/**
 * 性能测试
 */
function performanceTest() {
  console.log('\n⚡ 性能测试...')
  
  // 批量操作性能测试
  const progressions = Array(100).fill('1 4 5 1')
  const startTime = Date.now()
  
  const results = TransposeEngine.batchTranspose(progressions, 'C', 'G', false)
  
  const endTime = Date.now()
  const duration = endTime - startTime
  
  console.log(`📊 批量转调性能: ${duration}ms (100个进行)`)
  
  if (results.length !== 100 || !results.every(r => r.success)) {
    console.error('❌ 批量转调结果错误')
    return false
  }
  
  if (duration > 1000) {
    console.warn('⚠️ 批量转调性能较慢 (>1000ms)')
  }
  
  // 复杂进行性能测试
  const complexProgression = '1 2 3 4 5 6 7 1 2 3 4 5 6 7 1 2 3 4 5 6 7'
  const complexStartTime = Date.now()
  
  const complexResult = TransposeEngine.transpose({
    progression: complexProgression,
    sourceKey: 'C',
    targetKey: 'F#',
    isMinor: false
  })
  
  const complexEndTime = Date.now()
  const complexDuration = complexEndTime - complexStartTime
  
  console.log(`📊 复杂进行性能: ${complexDuration}ms (21个和弦)`)
  
  if (!complexResult.success || complexResult.data.length !== 21) {
    console.error('❌ 复杂进行转调结果错误')
    return false
  }
  
  if (complexDuration > 100) {
    console.warn('⚠️ 复杂进行转调性能较慢 (>100ms)')
  }
  
  return true
}

/**
 * 数据完整性测试
 */
function dataIntegrityTest() {
  console.log('\n🔍 数据完整性测试...')
  
  const expectedKeys = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B']
  
  // 检查和弦数据完整性
  for (const key of expectedKeys) {
    if (!CHORD_MAPS.major[key] || !CHORD_MAPS.minor[key]) {
      console.error(`❌ 缺少调性数据: ${key}`)
      return false
    }
    
    if (CHORD_MAPS.major[key].length !== 7 || CHORD_MAPS.minor[key].length !== 7) {
      console.error(`❌ 调性数据长度错误: ${key}`)
      return false
    }
  }
  
  // 检查罗马数字完整性
  if (ROMAN_NUMERALS.major.length !== 7 || ROMAN_NUMERALS.minor.length !== 7) {
    console.error('❌ 罗马数字数据长度错误')
    return false
  }
  
  console.log('✅ 数据完整性检查通过')
  return true
}

/**
 * 主测试函数
 */
function runAllTests() {
  console.log('🚀 开始跨平台一致性测试...')
  console.log('=' .repeat(50))
  
  let totalPassed = 0
  let totalTests = 0
  
  // 运行基础测试用例
  console.log('\n📝 基础功能测试')
  testCases.forEach(testCase => {
    totalTests++
    if (runTestCase(testCase)) {
      totalPassed++
    }
  })
  
  // 运行调性组合测试
  totalTests++
  if (testAllKeyCombinations()) {
    totalPassed++
    console.log('✅ 所有调性组合测试通过')
  }
  
  // 运行工具函数测试
  totalTests++
  if (testUtilityFunctions()) {
    totalPassed++
    console.log('✅ 工具函数测试通过')
  }
  
  // 运行性能测试
  totalTests++
  if (performanceTest()) {
    totalPassed++
    console.log('✅ 性能测试通过')
  }
  
  // 运行数据完整性测试
  totalTests++
  if (dataIntegrityTest()) {
    totalPassed++
    console.log('✅ 数据完整性测试通过')
  }
  
  // 输出最终结果
  console.log('\n' + '=' .repeat(50))
  console.log(`📊 测试结果: ${totalPassed}/${totalTests} 通过`)
  
  if (totalPassed === totalTests) {
    console.log('🎉 所有测试通过！跨平台一致性验证成功！')
    return true
  } else {
    console.log('❌ 部分测试失败，请检查问题并修复')
    return false
  }
}

// 导出测试函数供外部调用
module.exports = {
  runAllTests,
  runTestCase,
  testAllKeyCombinations,
  testUtilityFunctions,
  performanceTest,
  dataIntegrityTest
}

// 如果直接运行此文件，执行所有测试
if (require.main === module) {
  runAllTests()
}