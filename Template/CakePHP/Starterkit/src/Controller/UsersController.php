<?php
declare(strict_types=1);

namespace App\Controller;

class UsersController extends AppController
{
    public function login(){
        if ($this->Auth->user()) {
            // check if user already loggedIn redirect to dashboard
            return $this->redirect(['controller' => 'pages', 'action' => 'display']);
        } else {
            // check login post request
            if($this->request->is('post')){
                $email = $this->request->getData('email');
                $password = $this->request->getData('password');
                if($email == 'admin@themesbrand.com' && $password == '123456'){
                    $user = [
                        'id' => 1,
                        'email' => $email,
                    ];
                    $this->Auth->setUser($user);
                    return $this->redirect(['controller' => 'pages', 'action' => 'display']);
                }else{
                    $this->Flash->error('Invalid Login Credentials.');
                }
            }
        }
    }

    public function logout(){
        return $this->redirect($this->Auth->logout());
    }
}
