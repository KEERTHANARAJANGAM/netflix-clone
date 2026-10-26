
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t netflix-clone:1.0 .'
            }
        }
    }

    post {
        success {
            echo 'React build and Docker image creation succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
