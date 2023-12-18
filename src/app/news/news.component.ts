import {Component} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'news',
  standalone: true,
  imports: [
    MatExpansionModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  panelOpenState = false;
  protected readonly length = length;
  newsList = [
    {
      id: 4,
      title: 'Happy holidays.',
      date: '20 Dec 2023',
      description: 'May your Christmas sparkle with moments of love, laughter, and goodwill, and may the New Year bring you joy, peace, and endless possibilities. Happy Holidays!🎄🎅🎁'
    },
    {
      id: 3,
      title: 'AWD class suspended.',
      date: '15 Dec 2023',
      description: 'Due to personal problems, 18 Dec. 2023 the class can not be hold.'
    },
    {
      id: 2,
      title: "Exam dates to be decided.",
      date: '28 Nov 2023',
      description: 'The time has come to set the exam dates so that I can reserve the rooms. '
    },
    {
      id: 1,
      title: 'AWD. Special Guest.',
      date: '25 Oct 2023',
      description: '🌟 Exciting News! 🌟\n' +
        '\n' +
        'Get ready for an incredible treat, everyone! We\'re thrilled to announce a very special guest who will be joining our class soon. Stay tuned for an unforgettable session filled with wisdom, inspiration, and valuable insights. You won\'t want to miss this fantastic opportunity! Mark your calendars and get ready for an extraordinary experience! 🎉🌟'
    }

  ];


}
