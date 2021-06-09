import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { isNil, find } from 'lodash';
import { Router } from '@angular/router';

export interface SubCategory {
  type: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class SubCategoryService {

  constructor(private storage: LocalStorageService, private router: Router) { }

  addSubcategory(id: number) {
    let subCategory: SubCategory[] = this.storage.retrieve('sub-category');
    if (isNil(subCategory)) {
      this.storage.store('sub-category', []);
      subCategory = this.storage.retrieve('sub-category');
    }

    const finded = find(subCategory, { type: id });

    if (isNil(finded)) {
      subCategory.push({ type: 2, id });
    }
    this.storage.store('sub-category', subCategory);
  }

  clearSubCategory() {
    if (!isNil(this.storage.retrieve('sub-category'))) {
      this.storage.store('sub-category', []);
    }
  }

  goLastSubCategory() {

    const subCategories = this.storage.retrieve('sub-category');
    const length = subCategories.length;
    if (length === 0) {
      this.router.navigateByUrl(`/start`);
    } else {
      const id = subCategories[length - 1].id;
      this.router.navigateByUrl(`/category/${id}/sub-category`);
      this.removeLastSubCategory();
    }

  }

  removeLastSubCategory() {
    const subCategories: SubCategory[] = this.storage.retrieve('sub-category');
    subCategories.pop();
    this.storage.store('sub-category', subCategories);

  }
}
