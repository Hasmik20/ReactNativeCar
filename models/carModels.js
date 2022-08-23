export class CarModel {
  constructor(
    id,
    title,
    description,
    price,
    imageUrl,
    marka,
    date,
    type,
    time,
    address,
    isLiked,
    box,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.marka = marka;
    this.date = date;
    this.type = type;
    this.time = time;
    this.address = address;
    this.isLiked = isLiked;
   this.box = box
  }
}