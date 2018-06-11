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

Step 7:
Play around with SDK components 

For example, in App.js, add-
```
 <span className={'pads'}>
                    <Image cloudName="<cloud_name>" publicId={this.state.publicId} effect="blur:300" width="300">
                      <Transformation angle="45"/>
                    </Image>
                  </span>
                  <span className={'pads'}>
                    <Image cloudName="<cloud_name>" publicId={this.state.publicId} >
                      <Transformation width="300" effect="sepia" crop="scale"/>
                    </Image>
                  </span>
                  <span className={'pads'}>
                    <Image cloudName="<cloud_name>" publicId={this.state.publicId} >
                      <Transformation width="300" effect="grayscale" crop="scale"/>
                    </Image>
                  </span>
```



