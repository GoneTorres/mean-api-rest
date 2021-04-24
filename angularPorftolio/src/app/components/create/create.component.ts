import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(private projectService: ProjectService, private uploadService: UploadService) {
    this.title = 'Crear Proyecto';
    this.project = new Project('', '', '', '', 2021, '', '');
    this.url = Global.url;
  }

  ngOnInit(): void {}

  onSubmit(form) {
    console.log(this.project);
    this.projectService.saveProject(this.project).subscribe(
      (response) => {
        if (response.project) {
          this.uploadService.makeFileRequest(
            this.url + 'project/uploadImage/' + response.project._id,
              null
             ,
             this.filesToUpload,
             'image').then((result: any) =>
          {
            this.status = 'success';
            form.reset();
            console.log(result);
          });
        } else {
          this.status = 'failed';
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = (fileInput.target.files as Array<File>);
  }
}
