import { Component, OnInit } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-work-shift',
  templateUrl: './work-shift.component.html',
  styleUrls: ['./work-shift.component.css'],
})
export class WorkShiftComponent implements OnInit {
  workShift = [
    {
      shiftId: 1,
      shiftName: 'day',
      moveTo: 'day',
      shift: [
        {
          start: '11pm',
          end: '12pm',
          timeZone: 'GMT',
          empleyShift: [
            {
              start: '11pm',
              end: '8am',
              timeZone: 'GMT',
            },
            {
              start: '11pm',
              end: '8am',
              timeZone: 'GMT',
            },
          ],
        },
        {
          start: '12pm',
          end: '2pm',
          timeZone: 'GMT',
          empleyShift: [
            {
              start: '12am',
              end: '09pm',
              timeZone: 'GMT',
            },
            {
              start: '12am',
              end: '09pm',
              timeZone: 'GMT',
            },
          ],
        },
      ],
    },
    {
      shiftId: 2,
      shiftName: 'mid',
      moveTo: 'mid ',
      shift: [
        {
          start: '6pm',
          end: '2pm',
          timeZone: 'GMT',
          empleyShift: [
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
          ],
        },
        {
          start: '7pm',
          end: '2pm',
          timeZone: 'GMT',
          empleyShift: [
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
          ],
        },
        {
          start: '8pm',
          end: '2pm',
          timeZone: 'GMT',
          empleyShift: [
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
          ],
        },
      ],
    },
    {
      shiftId: 3,
      shiftName: 'eve',
      moveTo: 'eve ',
      shift: [
        {
          start: '1pm',
          end: '2pm',
          timeZone: 'GMT',
          empleyShift: [
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
          ],
        },
        {
          start: '2pm',
          end: '2pm',
          timeZone: 'GMT',
          empleyShift: [
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
          ],
        },
        {
          start: '5pm',
          end: '2pm',
          timeZone: 'GMT',
          empleyShift: [
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
          ],
        },
        {
          start: '4pm',
          end: '2pm',
          timeZone: 'GMT',
          empleyShift: [
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
            {
              start: '1pm',
              end: '2pm',
              timeZone: 'GMT',
            },
          ],
        },
      ],
    },
  ];

  constructor() {}
  ngOnInit() {}

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
