<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/color-helpers](./color-helpers.md) &gt; [lin\_sRGB](./color-helpers.lin_srgb.md)

## lin\_sRGB() function

Convert an array of of sRGB values where in-gamut values are in the range \[0 - 1\] to linear light (un-companded) form. Extended transfer function: For negative values, linear portion is extended on reflection of axis, then reflected power function is used.

**Signature:**

```typescript
export declare function lin_sRGB(RGB: Color): Color;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  RGB | [Color](./color-helpers.color.md) |  |

**Returns:**

[Color](./color-helpers.color.md)

