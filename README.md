# [scrollbar-size](https://github.com/olympicsoftware/scrollbar-size)

## <a name="installation-usage"></a>Installation

```
npm install --save scrollbar-size
```

## Usage

```typescript
import scrollbarSize from "scrollbar-size"

const sizeOfScrollbar: number = scrollbarSize();

console.log(sizeOfScrollbar); // usually ~20

```

### Notes

The function will return undefined if it is called before the document is ready.

The size of the scrollbar is only calculated the first time the function is
called. If your platform has scrollbars that resize, this module will not work
for you.

## Credits

Thanks to [olmokramer](https://github.com/olmokramer/) for the initial
implementation

## <a name="issues"></a>Issues

If you have any issues, you can file an issue on the
[github page](https://github.com/olympicsoftware/scrollbar-size/issues).

## <a name="license"></a>License

scrollbar-size is licensed under the [MIT license](LICENSE).
