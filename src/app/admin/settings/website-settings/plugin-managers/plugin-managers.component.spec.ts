import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginManagersComponent } from './plugin-managers.component';

describe('PluginManagersComponent', () => {
  let component: PluginManagersComponent;
  let fixture: ComponentFixture<PluginManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluginManagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
