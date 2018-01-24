# guid

This module creates a guid with help of [uuid](https://github.com/broofa/node-uuid) package

optionally you can add a timestamp in front

# usage

```javascript
import guid from 'gwi-lib/lib/guid'

const simpleGuid = guid()
// -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'

const guidWithTimestamp = guid(true)
// -> '1516778250916-110ec58a-a0f2-4ac4-8393-c866d813b8d1'
```
