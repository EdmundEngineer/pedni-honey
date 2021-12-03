import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfluencerComponent } from './post-influencer.component';

describe('PostInfluencerComponent', () => {
  let component: PostInfluencerComponent;
  let fixture: ComponentFixture<PostInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostInfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
