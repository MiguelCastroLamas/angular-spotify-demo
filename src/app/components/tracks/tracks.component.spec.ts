import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TracksComponent } from './tracks.component';
import { NoImagePipe } from '../../shared/pipes/no-image.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TracksComponent', () => {
  let component: TracksComponent;
  let fixture: ComponentFixture<TracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TracksComponent, NoImagePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
