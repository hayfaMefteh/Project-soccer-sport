import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs:any=[{title:"title1", description:"description1",date:"07/05/2023", img:"assets/images/img_1.jpg"},
  {title:"title2", description:"description2",date:"15/05/2023", img:"assets/images/img_1.jpg"},
  {title:"title3", description:"description3",date:"20/05/2023", img:"assets/images/img_1.jpg"}]
  constructor() { }

  ngOnInit() {
  }

}
