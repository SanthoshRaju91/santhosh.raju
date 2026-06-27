pipeline {
  agent any

  environment {
    SCANNER_HOME = tool 'SonarScanner-CLI'   // Manage Jenkins → Tools name
  }
  stages {
    stage('Checkout') { steps { checkout scm } }

    stage('Install & Test') {
      agent {
        docker {
          image 'node:20-bullseye'
          args '-u root --network=sonarqube_default'
        }
      } 
      steps {
        sh '''
          node -v
          npm ci
          # make sure your test script outputs coverage/lcov.info if you want coverage in Sonar
          npm run lint:report || true
          npm run test:ci || true
        '''
      }
    }

    stage('Sanity: reach Sonar') {
      agent {
        docker {
          image 'curlimages/curl:8.10.1'
          args '--network=sonarqube_default'
        }
      }

      steps {
         withSonarQubeEnv('sonarqube') {
          sh '''
            echo "SONAR_HOST_URL=$SONAR_HOST_URL"
            # Auth is required on /api/system/health in many setups
            curl -sS -H "Authorization: Bearer $SONAR_AUTH_TOKEN" "$SONAR_HOST_URL/api/system/health" || true
            echo
          '''
        }
      }
    }

    stage('SonarQube Scan') {
      agent {
        docker {
	  image 'sonarsource/sonar-scanner-cli:latest'
          args '--network=sonarqube_default'
    	}
      }
      steps {
        withSonarQubeEnv('sonarqube') {
          sh '"$SCANNER_HOME/bin/sonar-scanner"'
        }
      }
    }

    stage('Quality Gate') {
      agent any

      steps {
        timeout(time: 10, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }
  }
}

