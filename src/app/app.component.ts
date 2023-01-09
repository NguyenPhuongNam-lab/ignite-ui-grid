import { Component } from '@angular/core';

const data: {
  id: number;
  name: string;
  description: string;
  date: string;
  title: string;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
  test7: string;
  test8: string;
  test9: string;
  test10: string;
  test11: string;
  test12: string;
  test13: string;
  test14: string;
  test15: string;
}[] = [];

for (let i = 0; i < 7; i++) {
  data.push({
    id: i,
    name: 'string',
    description: 'string string',
    date: '10/11/2011',
    title: 'string',
    test1: 'string',
    test2: 'string',
    test3: 'string',
    test4: 'string',
    test5: 'string',
    test6: 'string',
    test7: 'string',
    test8: 'string',
    test9: 'string',
    test10: 'string',
    test11: 'string',
    test12: 'test12',
    test13: 'test13',
    test14: 'test14',
    test15: 'test15',
  });
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  public readonly data = data;
}
