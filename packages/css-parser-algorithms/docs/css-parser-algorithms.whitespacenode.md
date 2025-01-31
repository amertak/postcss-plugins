<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-parser-algorithms](./css-parser-algorithms.md) &gt; [WhitespaceNode](./css-parser-algorithms.whitespacenode.md)

## WhitespaceNode class

**Signature:**

```typescript
export declare class WhitespaceNode 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(value)](./css-parser-algorithms.whitespacenode._constructor_.md) |  | Constructs a new instance of the <code>WhitespaceNode</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [type](./css-parser-algorithms.whitespacenode.type.md) |  | [ComponentValueType](./css-parser-algorithms.componentvaluetype.md) | The node type, always <code>ComponentValueType.WhiteSpace</code> |
|  [value](./css-parser-algorithms.whitespacenode.value.md) |  | Array&lt;CSSToken&gt; | The list of consecutive whitespace tokens. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [tokens()](./css-parser-algorithms.whitespacenode.tokens.md) |  | Retrieve the tokens for the current whitespace. This is the inverse of parsing from a list of tokens. |
|  [toString()](./css-parser-algorithms.whitespacenode.tostring.md) |  | Convert the current whitespace to a string. This is not a true serialization. It is purely a concatenation of the string representation of the tokens. |

