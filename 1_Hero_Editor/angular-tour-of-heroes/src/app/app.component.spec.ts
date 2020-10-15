import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    tick();
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Tour of Heroes'`, fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    tick();
    expect(app.title).toEqual('Tour of Heroes');
  }));

  it('should not render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    tick();
    expect(compiled.querySelector('.content span')).toBe(null);
  }));
});
