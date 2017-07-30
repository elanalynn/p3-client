import { Component, OnInit } from '@angular/core';
import { IllustrationService } from './illustration.service';
import { IIllustration } from './illustration.model';

@Component({
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent implements OnInit {

  illustrations: IIllustration[];

  constructor(
    private illustrationsSvc: IllustrationService
  ) { }

  ngOnInit() {
    this.illustrations = this.illustrationsSvc.getIllustrations();
  }
}
