import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
interface UserProfile {
  name: string;
  phone: string;
  birthday: string;
  gender: string;
  imageUrl: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isProfileOpen = false;

  profile: UserProfile = {
    name: 'Preet',
    phone: '+91 8059366488',
    birthday: 'Aug 20, 1867',
    gender: 'Male',
    imageUrl: 'https://cdn-icons-png.freepik.com/512/6915/6915987.png',
  };
}
