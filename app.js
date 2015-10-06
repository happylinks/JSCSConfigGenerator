(function () {
    var options = [{
        id: 'disallowAnonymousFunctions',
        description: 'Requires that a function expression be named.',
        variants: [{
            hint: 'Allow anonymous functions',
            code: 'var a = function foo(){\n\n};\n$(\'#foo\').click(function<mark> </mark>(){\n\n});',
            value: false
        }, {
            hint: 'Disallow anonymous functions',
            code: 'var a = function foo(){\n\n};\n$(\'#foo\').click(function <mark>bar</mark>(){\n\n});',
            value: true
        }]
    }, {
        id: 'disallowArrowFunctions',
        description: 'Disallows arrow functions.',
        variants: [{
            hint: 'Allow arrow functions',
            code: '// arrow function\n[1, 2, 3].map(<mark>(x) => {</mark>\n    return x * x;\n});',
            value: false
        }, {
            hint: 'Disallow arrow functions',
            code: '// function expression in a callback\n[1, 2, 3].map(<mark>function (x) {</mark>\n    return x * x;\n});',
            value: true
        }]
    }, {
        id: 'disallowCapitalizedComments',
        description: 'Requires the first alphabetical character of a comment to be lowercase.',
        variants: [{
            hint: 'Disallow capitalized comments',
            code: '// <mark>v</mark>alid\n//valid\n\n/*\n  valid\n */\n\n/**\n * valid\n */\n\n// 123 or any non-alphabetical starting character',
            value: true
        }, {
            hint: 'Allow capitalized comments',
            code: '// <mark>I</mark>nvalid\n//Invalid\n/** Invalid */\n/**\n * Invalid\n */',
            value: false
        }]
    }, {
        id: 'disallowCommaBeforeLineBreak',
        description: 'Disallows commas as last token on a line in lists.',
        variants: [{
            hint: 'Comma on new line',
            code: 'var x = {\n    one: 1\n    <mark>,</mark> two: 2\n};\nvar y = { three: 3, four: 4};',
            value: true
        }, {
            hint: 'Comma at end of line',
            code: 'var x = {\n    one: 1<mark>,</mark>\n    two: 2\n};',
            value: false
        }]
    }, {
        id: 'disallowCurlyBraces',
        description: 'Disallows curly braces after statements.',
        variants: [{
            hint: 'Disallow curly braces',
            code: 'if (x)<mark> </mark>x++;',
            value: true
        }, {
            hint: 'Allow curly braces',
            code: 'if (x) <mark>{</mark>\n    x++;\n}',
            value: false
        }]
    }, {
        id: 'disallowDanglingUnderscores',
        description: 'Disallows identifiers that start or end in _.',
        variants: [{
            hint: 'Disallow dangling underscores',
            code: 'var<mark> </mark>x = 1;\nvar o = obj.__proto__;\nvar y = _.extend;\nvar z = __dirname;\nvar w = __filename;\nvar x_y = 1;\nvar v = _exception;',
            value: true
        }, {
            hint: 'Allow dangling underscores',
            code: 'var <mark>_</mark>x = 1;\nvar x_ = 1;\nvar x_y_ = 1;',
            value: false
        }]
    }, {
        id: 'disallowEmptyBlocks',
        description: 'Disallows empty blocks (except for catch blocks).',
        variants: [{
            hint: 'Disallow empty blocks',
            code: 'if ( a == b ) { c = d; }\ntry { a = b; } catch( e ){}',
            value: true
        }, {
            hint: 'Allow empty blocks',
            code: 'if ( a == b ) <mark>{ }</mark> else { c = d; }',
            value: false
        }]
    }, {
        id: 'disallowFunctionDeclarations',
        description: 'Disallows function declarations.',
        variants: [{
            hint: 'Allow function declarations',
            code: 'var expressed = function() {\n\n};\n\nvar expressed = function deeply() {\n\n};\n\n$(\'#foo\').click(function bar() {\n\n});',
            value: true
        }, {
            hint: 'Disallow function declarations',
            code: 'function stated() {\n\n}',
            value: false
        }]
    }, {
        id: 'disallowKeywordsOnNewLine',
        description: 'Disallows placing keywords on a new line.',
        variants: [{
            hint: '',
            code: 'if (x < 0) {\n    x++;\n} else {\n    x--;\n}',
            value: ['else', 'catch']
        }, {
            hint: '',
            code: 'if (x < 0) {\n    x++;\n}\nelse {\n    x--;\n}',
            value: []
        }]
    }, {
        id: 'disallowIdentifierNames',
        description: 'Disallows a specified set of identifier names.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowImplicitTypeConversion',
        description: 'Disallows implicit type conversion.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowKeywordsInComments',
        description: 'Disallows keywords in your comments, such as TODO or FIXME',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowKeywordsOnNewLine',
        description: 'Disallows placing keywords on a new line.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowKeywords',
        description: 'Disallows usage of specified keywords.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowMixedSpacesAndTabs',
        description: 'Requires lines to not contain both spaces and tabs consecutively,\nor spaces after tabs only for alignment if \"smart\"',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowMultiLineTernary',
        description: 'Disallows the test, consequent and alternate to be on separate lines when using the ternary operator.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowMultipleLineBreaks',
        description: 'Disallows multiple blank lines in a row.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowMultipleLineStrings',
        description: 'Disallows strings that span multiple lines without using concatenation.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowMultipleSpaces',
        description: 'Disallows multiple indentation characters (tabs or spaces) between identifiers, keywords, and any other token',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowMultipleVarDecl',
        description: 'Disallows multiple var declaration (except for-loop).',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowNamedUnassignedFunctions',
        description: 'Disallows unassigned functions to be named inline',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowNewlineBeforeBlockStatements',
        description: 'Disallows newline before opening curly brace of all block statements.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowNodeTypes',
        description: 'Disallow use of certain node types (from Esprima/ESTree).\nEsprima node types\n\nlist\n',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowNotOperatorsInConditionals',
        description: 'Disallows the not, not equals, and strict not equals operators in conditionals.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowObjectKeysOnNewLine',
        description: 'Disallows placing object keys on new line',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowOperatorBeforeLineBreak',
        description: 'Requires putting certain operators on the next line rather than on the current line before a line break.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowPaddingNewLinesAfterBlocks',
        description: 'Disallow a newline after blocks',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowPaddingNewLinesAfterUseStrict',
        description: 'Disallow a blank line after \'use strict\'; statements',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowPaddingNewLinesBeforeExport',
        description: 'Disallows newline before module.exports',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowPaddingNewlinesBeforeKeywords',
        description: 'Disallow an empty line above the specified keywords.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowPaddingNewLinesBeforeLineComments',
        description: 'Disallows newline before line comments',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowPaddingNewlinesInBlocks',
        description: 'Disallows blocks from beginning or ending with 2 newlines.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowPaddingNewLinesInObjects',
        description: 'Disallows newlines adjacent to curly braces in all object literals.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowParenthesesAroundArrowParam',
        description: 'Disallows parentheses around arrow function expressions with a single parameter.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowQuotedKeysInObjects',
        description: 'Disallows quoted keys in object if possible.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSemicolons',
        description: 'Disallows lines from ending in a semicolon.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowShorthandArrowFunctions',
        description: 'Require arrow functions to use a block statement (explicit return).',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceAfterBinaryOperators',
        description: 'Requires sticking binary operators to the right.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceAfterKeywords',
        description: 'Disallows space after keyword.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceAfterLineComment',
        description: 'Requires that a line comment (//) not be followed by a space.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceAfterObjectKeys',
        description: 'Disallows space after object keys.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceAfterPrefixUnaryOperators',
        description: 'Requires sticking unary operators to the right.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceBeforeBinaryOperators',
        description: 'Requires sticking binary operators to the left.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceBeforeBlockStatements',
        description: 'Disallows space before block statements (for loops, control structures).',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceBeforeComma',
        description: 'Disallows spaces before commas',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceBeforeKeywords',
        description: 'Disallows space before keyword.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceBeforeObjectValues',
        description: 'Disallows space after object keys.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceBeforePostfixUnaryOperators',
        description: 'Requires sticking unary operators to the left.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceBeforeSemicolon',
        description: 'Disallows spaces before semicolons.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpaceBetweenArguments',
        description: 'Ensure there are no spaces after argument separators in call expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInAnonymousFunctionExpression',
        description: 'Disallows space before () or {} in anonymous function expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInCallExpression',
        description: 'Disallows space before () in call expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInConditionalExpression',
        description: 'Disallows space before and/or after ? or : in conditional expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInForStatement',
        description: 'Disallow spaces in between for statement.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInFunctionDeclaration',
        description: 'Disallows space before () or {} in function declarations.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInFunctionExpression',
        description: 'Disallows space before () or {} in function expressions (both named\nand anonymous).',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInFunction',
        description: 'Disallows space before () or {} in function expressions (both named\nand anonymous) and function declarations.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInNamedFunctionExpression',
        description: 'Disallows space before () or {} in named function expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInsideArrayBrackets',
        description: 'Disallows space after opening array square bracket and before closing.\nReports only on arrays, not on property accessors.\nUse disallowSpacesInsideBrackets\nto report on all brackets.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInsideBrackets',
        description: 'Disallows space after opening square bracket and before closing.\nReports on all on brackets, even on property accessors.\nUse disallowSpacesInsideArrayBrackets\nto exclude property accessors.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInsideObjectBrackets',
        description: 'Disallows space after opening object curly brace and before closing.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInsideParentheses',
        description: 'Disallows space after opening round bracket and before closing.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowSpacesInsideParenthesizedExpression',
        description: 'Disallows space after opening and before closing grouping parentheses.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowTabs',
        description: 'Disallows tabs everywhere.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowTrailingComma',
        description: 'Disallows an extra comma following the final element of an array or object literal.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowTrailingWhitespace',
        description: 'Requires all lines to end on a non-whitespace character',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowUnusedParams',
        description: 'Disallows unused params in function expression and function declaration.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'disallowYodaConditions',
        description: 'Requires the variable to be the left hand operator when doing a boolean comparison',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'jsDoc',
        description: 'Validate jsdoc comments',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'maximumLineLength',
        description: 'Requires all lines to be at most the number of characters specified',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'maximumNumberOfLines',
        description: 'Requires the file to be at most the number of lines specified',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireAlignedObjectValues',
        description: 'Requires proper alignment in object literals.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireAnonymousFunctions',
        description: 'Requires that a function expression be anonymous.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireArrowFunctions',
        description: 'Requires that arrow functions are used instead of anonymous function expressions in callbacks.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireBlocksOnNewline',
        description: 'Requires blocks to begin and end with a newline',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireCamelCaseOrUpperCaseIdentifiers',
        description: 'Requires identifiers to be camelCased or UPPERCASE_WITH_UNDERSCORES',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireCapitalizedComments',
        description: 'Requires the first alphabetical character of a comment to be uppercase, unless it is part of a multi-line textblock.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireCapitalizedConstructors',
        description: 'Requires constructors to be capitalized (except for this)',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireCommaBeforeLineBreak',
        description: 'Requires commas as last token on a line in lists.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireCurlyBraces',
        description: 'Requires curly braces after statements.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireDollarBeforejQueryAssignment',
        description: 'Require a $ before variable names that are jquery assignments.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireDotNotation',
        description: 'Requires member expressions to use dot notation when possible',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireFunctionDeclarations',
        description: 'Requires function declarations by disallowing assignment of functions\nexpressions to variables. Function expressions are allowed in all other\ncontexts, including when passed as function arguments or immediately invoked.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireKeywordsOnNewLine',
        description: 'Requires placing keywords on a new line.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireLineBreakAfterVariableAssignment',
        description: 'Requires placing line feed after assigning a variable.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireLineFeedAtFileEnd',
        description: 'Requires placing line feed at file end.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireMatchingFunctionName',
        description: 'Requires function names to match member and property names.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireMultiLineTernary',
        description: 'Requires the test, consequent and alternate to be on separate lines when using the ternary operator.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireMultipleVarDecl',
        description: 'Requires multiple var declaration.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireNamedUnassignedFunctions',
        description: 'Require unassigned functions to be named inline',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireNewlineBeforeBlockStatements',
        description: 'Requires newline before opening curly brace of all block statements.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireNumericLiterals',
        description: 'Requires use of binary, hexadecimal, and octal literals instead of parseInt.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireObjectKeysOnNewLine',
        description: 'Requires placing object keys on new line',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireOperatorBeforeLineBreak',
        description: 'Requires operators to appear before line breaks and not after.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requirePaddingNewLineAfterVariableDeclaration',
        description: 'Requires an extra blank newline after var declarations, as long\nas it is not the last expression in the current block.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requirePaddingNewLinesAfterBlocks',
        description: 'Requires newline after blocks',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requirePaddingNewLinesAfterUseStrict',
        description: 'Requires a blank line after \'use strict\'; statements',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requirePaddingNewLinesBeforeExport',
        description: 'Requires newline before module.exports',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requirePaddingNewlinesBeforeKeywords',
        description: 'Requires an empty line above the specified keywords unless the keyword is the first expression in a block.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requirePaddingNewLinesBeforeLineComments',
        description: 'Requires newline before line comments',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requirePaddingNewlinesInBlocks',
        description: 'Requires blocks to begin and end with 2 newlines',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requirePaddingNewLinesInObjects',
        description: 'Requires newline inside curly braces of all objects.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireParenthesesAroundArrowParam',
        description: 'Requires parentheses around arrow function expressions with a single parameter.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireParenthesesAroundIIFE',
        description: 'Requires parentheses around immediately invoked function expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireQuotedKeysInObjects',
        description: 'Requires quoted keys in objects.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSemicolons',
        description: 'Requires semicolon after:',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireShorthandArrowFunctions',
        description: 'Require arrow functions to use an expression body when returning a single statement\n(no block statement, implicit return).',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceAfterBinaryOperators',
        description: 'Disallows sticking binary operators to the right.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceAfterKeywords',
        description: 'Requires space after keyword.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceAfterLineComment',
        description: 'Requires that a line comment (//) be followed by a space.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceAfterObjectKeys',
        description: 'Requires space after object keys.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceAfterPrefixUnaryOperators',
        description: 'Disallows sticking unary operators to the right.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceBeforeBinaryOperators',
        description: 'Disallows sticking binary operators to the left.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceBeforeBlockStatements',
        description: 'Requires space(s) before block statements (for loops, control structures).',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceBeforeComma',
        description: 'Requires space before comma',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceBeforeKeywords',
        description: 'Requires space before keyword.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceBeforeObjectValues',
        description: 'Requires space after object keys.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceBeforePostfixUnaryOperators',
        description: 'Disallows sticking unary operators to the left.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpaceBetweenArguments',
        description: 'Ensure there are spaces after argument separators in call expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInAnonymousFunctionExpression',
        description: 'Requires space before () or {} in anonymous function expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInCallExpression',
        description: 'Requires space before () in call expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInConditionalExpression',
        description: 'Requires space before and/or after ? or : in conditional expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInForStatement',
        description: 'Requires spaces inbetween for statement.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInFunctionDeclaration',
        description: 'Requires space before () or {} in function declarations.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInFunctionExpression',
        description: 'Requires space before () or {} in function expressions (both named\nand anonymous).',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInFunction',
        description: 'Requires space before () or {} in function expressions (both named\nand anonymous) and function declarations.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInNamedFunctionExpression',
        description: 'Requires space before () or {} in named function expressions.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInsideArrayBrackets',
        description: 'Requires space after opening array square bracket and before closing.\nReports only on arrays, not on property accessors.\nUse requireSpacesInsideBrackets\nto report on all brackets.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInsideBrackets',
        description: 'Requires space after opening square bracket and before closing.\nReports on all on brackets, even on property accessors.\nUse requireSpacesInsideArrayBrackets\nto exclude property accessors.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInsideObjectBrackets',
        description: 'Requires space after opening object curly brace and before closing.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInsideParentheses',
        description: 'Requires space after opening round bracket and before closing.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpacesInsideParenthesizedExpression',
        description: 'Requires space after opening and before closing grouping parentheses.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireSpread',
        description: 'Disallows using .apply in favor of the spread operator',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireTemplateStrings',
        description: 'Requires the use of template strings instead of string concatenation.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireTrailingComma',
        description: 'Requires an extra comma following the final element of an array or object literal.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireVarDeclFirst',
        description: 'Requires var declaration to be on the top of an enclosing scope',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'requireYodaConditions',
        description: 'Requires the variable to be the right hand operator when doing a boolean comparison',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'safeContextKeyword',
        description: 'Option to check var that = this expressions',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'validateAlignedFunctionParameters',
        description: 'Validates proper alignment of function parameters.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'validateCommentPosition',
        description: 'This rule is for validating the positioning of line comments. Block comments are ignored.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'validateIndentation',
        description: 'Validates indentation for switch statements and block statements',
        variants: [{
            hint: '1 tab',
            code: 'if (a) {\n\tb=c;\n\t\tfunction(d) {\t\t\ne=f;\t\n}\n}',
            value: '\t'
        }, {
            hint: '2 spaces',
            code: 'if (a) {\n  b=c;\n  function(d) {\n    e=f;\n  }\n}',
            value: 2
        }, {
            hint: '4 spaces',
            code: 'if (a) {\n    b=c;\n    function(d) {\n      e=f;\n    }\n}',
            value: 4
        }]
    },
    {
        id: 'validateLineBreaks',
        description: 'Option to check line break characters',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'validateNewlineAfterArrayElements',
        description: 'Requires each element in array on a single line when array length is more than passed maximum\nnumber or array fills more than one line.',
        variants: [{
            hint: '',
            code: '',
            value: ''
        }, {
            hint: '',
            code: '',
            value: ''
        }]
    },
    {
        id: 'validateOrderInObjectKeys',
        description: 'Validates the order in object keys.',
        variants: [{
            hint: '',
            code: 'var x = {\n x: \'foo\',\n y: \'bar\'\n}',
            value: true
        }, {
            hint: '',
            code: 'var x = {\n y: \'foo\',\n x: \'bar\'\n}',
            value: false
        }]
    },
    {
        id: 'validateParameterSeparator',
        description: 'Enable validation of separators between function parameters. Will ignore newlines.',
        variants: [{
            hint: '',
            code: 'function a(b,c) {}',
            value: ','
        }, {
            hint: '',
            code: 'function a(b, c) {}',
            value: ', '
        }, {
            hint: '',
            code: 'function a(b ,c) {}',
            value: ' ,'
        }, {
            hint: '',
            code: 'function a(b , c) {}',
            value: ' , '
        }]
    },
    {
        id: 'validateQuoteMarks',
        description: 'Requires all quote marks to be either the supplied value, or consistent if true',
        variants: [{
            hint: 'Double quotes',
            code: 'var x = "x";\nvar y = \'"x"\';',
            value: {'mark': '"', 'escape': true}
        }, {
            hint: 'Single quotes',
            code: 'var x = \'x\';\nvar y = "\'x\'";',
            value: "{'mark': \"\'\", 'escape': true}"
        }]
    }];

    function handleClick() {
        var i = parseInt(this.dataset.index);
        var value = this.dataset.value;
        var id = options[i].id;
        updateConfig(id, value);

        i = i + 1;
        i < options.length ? displayOption(i) : displayConfig();
    }

    function updateConfig(id, value) {
        value = value === 'true' ? true :
            value === 'false' ? false :
            value === 'null' ? null :
            value;
        if (value !== null) config[id] = value;
    }

    function displayOption(index) {
        var variants = options[index].variants;
        var variantsCount = variants.length;
        var formFragment = document.createDocumentFragment();

        var name = document.createElement('h3');
        name.textContent = options[index].id;
        name.style.width = '100%';
        formFragment.appendChild(name);

        var description = document.createElement('p');
        description.textContent = options[index].description;
        description.style.width = '100%';
        formFragment.appendChild(description);

        for (i = 0; i < variantsCount; i++) {
            var variant = variants[i];
            var el = createVariant(variant, index);
            formFragment.appendChild(el);
        }

        var option = document.getElementById('option');
        option.innerHTML = '';
        option.appendChild(formFragment);

        var step = document.getElementById('step');
        step.textContent = index + 1;
    }

    function displayConfig() {
        var el = document.createElement('textarea');
        el.classList.add('options-result');
        el.setAttribute('readonly', true);
        el.textContent = JSON.stringify(config, null, 4);

        var option = document.getElementById('option');
        option.innerHTML = '';
        option.appendChild(el);
        el.style.height = el.scrollHeight - 10 + 'px';

        var title = document.getElementById('title');
        title.innerHTML = 'Copy the config from here &darr; and save it as <code>.jscsrc</code> in your project\'s dir:';

        document.getElementById('progress').innerHTML = '';
    }

    function createVariant(variant, i) {
        var el = document.createElement('div');
        el.classList.add('option-variant');
        el.dataset.index = i;
        el.dataset.value = variant.value;

        var hint = document.createElement('div');
        hint.classList.add('option-variant-hint');
        hint.textContent = variant.hint;
        el.appendChild(hint);

        var code = document.createElement('pre');
        code.classList.add('option-variant-code');
        code.innerHTML = '<code>' + variant.code + '</code>';
        el.appendChild(code);

        el.addEventListener('click', handleClick);

        return el;
    }

    var config = {};
    displayOption(0);
})()
