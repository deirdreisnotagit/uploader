# uploader

Step 1:
cd to my app
npm install cloudinary-react

Step 2:
Navigate to App.js
Add Upload Widget method

```
openUploadWidget = () => {
    var comp = this;
    window.cloudinary.openUploadWidget({ cloud_name: "<cloud_name>", upload_preset: "<upload_preset>", sources:['local','url','facebook']}, 
          function(error, result){

            if(result)            
              component.setState({ publicId: result[0].public_id });
        });
  }
```

Step 3:
In App.js, pass publicId and uploadWidget to our <Button /> component

```<Button openUploadWidget={this.openUploadWidget} publicId={this.state.publicId}/>```

Step 4:
In Button.js eject props to const proptypes 

```
const proptypes = {
	publicId: PropTypes.string,
	openUploadWidget: PropTypes.func	
}
```

Step 5: 
In Button.js import { Image } from 'cloudinary-react';

Step 6: 
Creat upload preset on cloudinary console. Paste cloud name and preset to upload widget function. Add cloudname to Image tag on Button.js 


