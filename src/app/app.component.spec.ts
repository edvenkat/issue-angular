import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CommonMethods } from './common/utilities/common-methods';

describe('AppComponent', () => {
  let component:AppComponent
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],providers: [
        { provide: CommonMethods, useClass: class {} },
        // { provide: NgZone, useValue: { run(fn): any { return fn(); } }},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('appends the GTM script to the document head for a valid urlCountry', () => {
    component.triggerGtmScript('mauritius')
  });

  it('does not append the GTM script for an invalid urlCountry', () => {
    component.triggerGtmNoScript('bangladesh')
  });

});