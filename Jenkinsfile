pipeline {
  agent {
    docker {
      image 'cypress/included:13.10.0'
      args '-u root:root'
    }
  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
    }
  }
}
