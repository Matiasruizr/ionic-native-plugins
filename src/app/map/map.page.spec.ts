import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPage } from './map.page';

describe('MapPage', () => {
  let component: MapPage;
  let fixture: ComponentFixture<MapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a map', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#mapContainer')).toBeTruthy();
  });

  it('should have a button to go back to home page', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#homeButton')).toBeTruthy();
  });

  it('should have ion-title with text "Map"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-title').textContent).toContain('Map');
  });
});
