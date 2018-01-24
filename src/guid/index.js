import uuid from 'uuid/v4'

const generateGuid = addTimestamp => {
  const randomGuid = uuid()
  if (!addTimestamp) {
    return randomGuid
  }
  return `${new Date().getTime()}-${randomGuid}`
}

export default generateGuid
