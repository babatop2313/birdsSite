import { Component } from '@angular/core';

@Component({
  selector: 'app-comptage',
  templateUrl: './comptage.component.html',
  styleUrls: ['./comptage.component.scss']
})
export class ComptageComponent {

  // imagePreview: string | undefined;
  imagePreview = '../assets/photo_icone.jpg'

  previewImage(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
