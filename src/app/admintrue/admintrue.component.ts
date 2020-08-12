import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-admintrue',
  templateUrl: './admintrue.component.html',
  styleUrls: ['./admintrue.component.css']
})
export class AdmintrueComponent implements OnInit {

  constructor() { }

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
    ];

    // sections = [
    //   {
    //     title: '1'
    //   },
    //   {
    //     title: '2'
    //   },
    //   {
    //     title: '3'
    //   },
    //   {
    //     title: '4'
    //   },
    //   {
    //     title: '5'
    //   },
    // ];
    // movedSections = [
    // ];

  ngOnInit() {

  }

  // onDrop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }

}
