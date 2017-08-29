export default class Singer {
  constructor({id, name,ID}) {
    this.id = id
    this.name = name
    this.ID=ID
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}