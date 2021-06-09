import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { CoreService } from './core/core.service';
import { Api } from './core/resource/rest-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('contentTemplate')
  contentTemplate!: TemplateRef<any>;

  @ViewChild('contentTemplateList')
  contentTemplateList!: TemplateRef<any>;

  private _form: FormGroup;
  private api: Api<any>;
  public list = [];

  constructor(private windowService: NbWindowService, private builder: FormBuilder, private _core: CoreService,) {
    this._form = this.builder.group({
      name: null
    });
    this.api = this._core.newResource('user');
  }
  ngOnInit(): void {
    this.load();
  }

  async load() {
    const load = await this.api.find().toPromise();
    this.list = load.res;
    console.log(this.list);
  }

  openNew() {
    this.windowService.open(
      this.contentTemplate,
      { title: 'Nuevo', context: { text: 'some text to pass into template' } },
    );
  }

  openList() {
    this.windowService.open(
      this.contentTemplateList,
      { title: 'Lista', context: { text: 'some text to pass into template' } },
    );
  }

  async changeStatus(user: any) {
    console.log('here');
    user.vaccine = !user.vaccine;
    const update = await this.api.put(user, null, null, user.id).toPromise();
    console.log(update);
  }

  async save() {
    console.log('here');
    const save = await this.api.insert(this._form.value).toPromise();
    console.log(save);
  }

  get form() {
    return this._form;
  }
}
