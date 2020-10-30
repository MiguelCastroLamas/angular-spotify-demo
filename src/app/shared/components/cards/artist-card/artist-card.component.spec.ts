import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistCardComponent } from './artist-card.component';
import { NoImagePipe } from '../../../pipes/no-image.pipe';

describe('ArtistCardComponent', () => {
  let component: ArtistCardComponent;
  let fixture: ComponentFixture<ArtistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistCardComponent, NoImagePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
