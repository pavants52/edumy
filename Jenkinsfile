import java.text.SimpleDateFormat

node {
    
currentBuild.result = "SUCCESS"
def timeStamp;
def project_id;
def aws_s3_bucket_name;
def aws_s3_deploy_bucket_name;
def aws_s3_bucket_region;

try {
   stage('Checkout') { // for display purposes
    checkout scm;  
   }
   stage('Initialize') {
   	   project_id = 'instituteweb';
	   aws_s3_bucket_name = 'instituteweb-repo';
	   aws_s3_deploy_bucket_name = 'instituteweb-dev.saasproduct.click';
	   aws_s3_bucket_region = 'us-east-1';
	   timeStamp = getTimeStamp();
	}
   stage('Clean'){
		sh 'rm -rf dist && rm -rf dist.tar.gz && rm -rf release/*.tar.gz'
   }
   stage('GetDependencies'){
		sh 'npm install --max-old-space-size=400'
   }
   stage('Build'){
		sh 'npm run build --prod --max-old-space-size=400'
   }
   stage('Archive') {
		sh 'mkdir -p release'
		sh 'cd dist && tar -czvf ../release/instituteweb-$(timeStamp).tar.gz . && cd ..'
		stash includes: 'release/*.tar.gz', name: 'instituteweb'
		stash includes: 'dist/**/*', name: 'instituteweb_dist'
   }
	withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aws-deployuser', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']])  
	 {
		stage('Publish to S3'){
		unstash 'instituteweb'
		awsIdentity() //show us what aws identity is being used
		def targetLocation = project_id + '/' + timeStamp;
		withAWS(region: aws_s3_bucket_region) {
		s3Upload(file: 'release', bucket: aws_s3_bucket_name, path: targetLocation)
		}
		}
	}
   
    
}catch (err) {

        currentBuild.result = "FAILURE"

        throw err
    }
}

node{

	stage('Deploy_SIT')
	{
		def userInput = false;
		def didTimeout = false;
		def aws_s3_deploy_bucket_name = 'instituteweb-dev.saasproduct.click';
		def aws_s3_deploy_bucket_region = 'ap-southeast-1';

		echo "performing deployment"

		withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aws-deployuser', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']])  
		{
			dir("instituteweb_dist") {
				unstash "instituteweb_dist"
			}
			awsIdentity() //show us what aws identity is being used
			withAWS(region: aws_s3_deploy_bucket_region) {
			s3Delete(bucket: aws_s3_deploy_bucket_name, path: '/')
			s3Upload(file: 'instituteweb_dist/dist', bucket: aws_s3_deploy_bucket_name, path: '')
			}
		}

	}
}
def getTimeStamp(){
	def dateFormat = new SimpleDateFormat("yyyyMMddHHmm")
	def date = new Date()
	return dateFormat.format(date);
}
