import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { HelloWorldComponent } from '@ntf/native';

type UnsubscribeEventListener = () => void;

@Component({
  selector: 'ntf-angular-helloworld',
  template: '<ntf-native-helloworld #helloworld></ntf-native-helloworld>',
})
export class HelloWorldAngularComponent implements AfterViewInit, OnDestroy {
  @ViewChild('helloworld', { static: false }) public nativeComponent?: ElementRef<HelloWorldComponent>;
  private unsubCustomEventListener: UnsubscribeEventListener = () => {};

  constructor(
    private renderer: Renderer2
  ) {}

  public ngAfterViewInit(): void {
    // console.log(this.nativeComponent, this.nativeComponent?.nativeElement);
    this.unsubCustomEventListener = this.renderer.listen(this.nativeComponent?.nativeElement, 'customEvent', this.testEvent.bind(this));
  }

  public ngOnDestroy(): void {
    this.unsubCustomEventListener();
  }

  public testEvent(event: unknown): void {
    console.log(event);
  }
}
