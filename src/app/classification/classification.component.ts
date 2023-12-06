import { Component } from '@angular/core';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent {

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
