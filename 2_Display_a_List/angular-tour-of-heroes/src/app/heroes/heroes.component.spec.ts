import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('two-way binding: setting the input value WindstormCC can modify component hero name and \
  setting component hero name can also change the input value', fakeAsync(() => {
    const defaultHeroName = component.hero.name;
    expect(defaultHeroName).toEqual('Windstorm');
    const spanNativeElement = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(spanNativeElement.textContent).toEqual('id: ');
    const divNativeElement = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(divNativeElement.textContent).toEqual('id: 1');
    
    const dummyInputDebugElement = fixture.debugElement.query(By.css('input'));
    const dummyInputNativeElement = dummyInputDebugElement.nativeElement;
    expect(dummyInputNativeElement.value).toEqual('');

    dummyInputNativeElement.value = 'WindstormCC';
    dummyInputNativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick();
    expect(dummyInputNativeElement.value).toEqual('WindstormCC');
    const h2HeroName = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(h2HeroName.textContent).toEqual('WINDSTORMCC Details');
    expect(component.hero.name).toEqual('WindstormCC');

    component.hero.name = 'NewName';
    fixture.detectChanges();
    tick();
    expect(h2HeroName.textContent).toEqual('NEWNAME Details');
    expect(dummyInputNativeElement.value).toEqual('NewName');
  }));
});
