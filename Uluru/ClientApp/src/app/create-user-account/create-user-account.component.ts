import { Component, OnInit, Inject, Input } from '@angular/core';
import { CookieHelper } from '../../helpers/cookie.helper';
import { HttpClient } from '@angular/common/http';
import { DataSharingService } from '../../helpers/datasharing.service';
import { IPosition } from '../../models/position';
import { IWorkingGroup } from '../../models/workingGroup';
import { IUser } from '../user/User';

@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {
  @Input() workingGroup: IWorkingGroup;
  public firstName: string;
  public lastName: string;
  public email: string;
  public selectedPositionId: number;
  public positions: IPosition[];
  public wage: number;
  public password: string;
  public selectedUserRole: string = "User";


  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private cookieHelper: CookieHelper,
    private dataSharingService: DataSharingService
  ) { }

  ngOnInit() {
    this.http.get<IPosition[]>(this.baseUrl + 'api/position/groups/' + this.workingGroup.id).subscribe(result => {
      this.positions = result
    }, error => console.error(error));
  }

  async createUser() {
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      positionId: this.selectedPositionId,
      hourlyWage: this.wage,
      workingGroupId: this.workingGroup.id,
      password: this.password,
      userRole: this.selectedUserRole,
    }
    this.http.post(this.baseUrl + 'api/users', data).subscribe(result => {
      alert("Created user succesfully");
    }, error => {
        console.error(error);
        alert(error);
    });
  }
}
