<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/media-query-list-parser](./media-query-list-parser.md) &gt; [parseCustomMediaFromTokens](./media-query-list-parser.parsecustommediafromtokens.md)

## parseCustomMediaFromTokens() function

**Signature:**

```typescript
export declare function parseCustomMediaFromTokens(tokens: Array<CSSToken>, options?: {
    preserveInvalidMediaQueries?: boolean;
    onParseError?: (error: ParseError) => void;
}): CustomMedia | false;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  tokens | Array&lt;CSSToken&gt; |  |
|  options | { preserveInvalidMediaQueries?: boolean; onParseError?: (error: ParseError) =&gt; void; } | _(Optional)_ |

**Returns:**

[CustomMedia](./media-query-list-parser.custommedia.md) \| false

