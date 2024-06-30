import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an add button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#addButton').textContent).toContain('Add');
  });

  it('should have a newTodo input', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#newTodo')).toBeTruthy();
  });
  
  it('should have a button to go back to home page', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#homeButton')).toBeTruthy();
  });

  it('should have a button to go to camera page', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#cameraButton')).toBeTruthy();
  });

  it('should call addTodo method when addButton is clicked', () => {
    spyOn(component, 'addTodo');
    const addButton = fixture.nativeElement.querySelector('#addButton');
    addButton.click();
    expect(component.addTodo).toHaveBeenCalled();
  });
});
