import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeditComponent } from './listedit.component';

describe('ListeditComponent', () => {
  let component: ListeditComponent;
  let fixture: ComponentFixture<ListeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeditComponent]
    });
    fixture = TestBed.createComponent(ListeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
