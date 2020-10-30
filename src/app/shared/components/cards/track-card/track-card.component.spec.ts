import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackCardComponent } from './track-card.component';
import { NoImagePipe } from '../../../pipes/no-image.pipe';
import { SanitizeUriPipe } from '../../../pipes/sanitize-uri.pipe';

describe('TrackCardComponent', () => {
  let component: TrackCardComponent;
  let fixture: ComponentFixture<TrackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrackCardComponent, NoImagePipe, SanitizeUriPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
