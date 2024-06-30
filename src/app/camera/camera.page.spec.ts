import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraPage } from './camera.page';

describe('CameraPage', () => {
  let component: CameraPage;
  let fixture: ComponentFixture<CameraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button to take a picture', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#takePhotoButton').textContent).toContain('Take a photo');
  })
});
