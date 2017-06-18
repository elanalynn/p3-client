import { Component, OnInit } from '@angular/core';
import { IllustrationsService } from './illustrations.service';
import { IIllustration } from './illustration/illustration.model';

@Component({
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent implements OnInit {

  illustrations: IIllustration[];

  constructor(
    private illustrationsSvc: IllustrationsService
  ) { }

  ngOnInit() {
    this.illustrations = this.illustrationsSvc.getIllustrations();
  }
}
