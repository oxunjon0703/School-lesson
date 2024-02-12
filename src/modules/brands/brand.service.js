import { ResData } from "../../common/resData.js";
import { BrandRepository } from "./brand.repository.js";
import { BrandNotFoundException } from "./exception/brand.exception.js";
import { BrandEntity } from "./entity/brand.entity.js";

export class BrandService {
  #repository;
  constructor() {
    this.#repository = new BrandRepository();
  }

  async getAll() {
    const brands = await this.#repository.getAll();

    const resData = new ResData("get all brands", 200, brands);

    return resData;
  }

  async getById(Id) {
    const brandId = await this.#repository.getOneById(Id);

    if (!brandId) {
      throw new BrandNotFoundException();
    }

    const resData = new ResData("get all brands", 200, brandId);

    return resData;
  }

  async create(dto) {
    const newBrand = new BrandEntity(dto);

    const Brands = await this.#repository.create(newBrand);

    const resData = new ResData("brand created", 200, Brands);

    return resData;
  }

  async update(dto) {

    const updateBrand = await this.#repository.update(dto)

    const resData = new ResData("updated by id", 200, updateBrand);

    return resData;
  }

  async delete(Id) {
    const brandId = await this.#repository.getOneById(Id);

    if (!brandId) {
      throw new BrandNotFoundException();
    }

    const deleteBrand = await this.#repository.delete(Id);

    const resData = new ResData("deleted Id", 200, brandId);

    return resData;
  }
}
