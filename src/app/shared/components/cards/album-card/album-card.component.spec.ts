import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumCardComponent } from './album-card.component';
import { NoImagePipe } from '../../../pipes/no-image.pipe';

describe('AlbumCardComponent', () => {
  let component: AlbumCardComponent;
  let fixture: ComponentFixture<AlbumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumCardComponent, NoImagePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
