import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app:AppComponent;

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [
  //       RouterTestingModule
  //     ],
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // });

  // it('should Total be equal 1', () => {
  //   // const fixture = TestBed.createComponent(AppComponent);
  //   // const app = fixture.componentInstance;
  //   expect(app.total).toEqual(1);
  // });

  // it('should Greeting to return Welcome mr Gold', () => {
  //   expect(app.greeting('Gold')).toContain('Gold');
  // });

  // it('should Add method to return 2', () => {
  //   // const fixture = TestBed.createComponent(AppComponent);
  //   // const app = fixture.componentInstance;
  //   const res=app.add()
  //   expect(app.total).toEqual(2);
  // });

  it('should minus method to return 0', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    const res=app.minus()
    expect(app.total).toEqual(0);
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('app');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(app.title);

  });

  it(`should display welcome mr Gold`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar span')?.textContent).toContain('Gold');

  });
});
