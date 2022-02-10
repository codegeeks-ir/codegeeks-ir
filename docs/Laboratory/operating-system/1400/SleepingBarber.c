#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <time.h>
#include <pthread.h>
#include <semaphore.h>

// The maximum number of customer threads.
#define MAX_CUSTOMERS 25
//Number of chairs
#define NUM_CHAIRS 10

// Function prototypes…
void *customer(void *num);
void *barber(void *);

void cuttime(int num);
void timearrive(int time);

// Define the semaphores.

sem_t waitingRoom;
sem_t barberChair;
sem_t barberSleep;
sem_t hairCut;

int allDone = 0;

int main(int argc, char *argv[]) {
  pthread_t btid;
  pthread_t tid[MAX_CUSTOMERS];
  long RandSeed;
  int i, numCustomers, numChairs;
  int Number[MAX_CUSTOMERS];

  printf("Enter the number of Custmors : "); scanf("%d",&numCustomers);
  
  numChairs = NUM_CHAIRS;
  if (numCustomers > MAX_CUSTOMERS) {
  printf("The max number of Customers is %d.\n", MAX_CUSTOMERS);
  exit(-1);
  }

  for (i=0; i<MAX_CUSTOMERS; i++) {
  Number[i] = i;
  }

  sem_init(&waitingRoom, 0, numChairs);
  sem_init(&barberChair, 0, 1);
  sem_init(&barberSleep, 0, 0);
  sem_init(&hairCut, 0, 0);

  pthread_create(&btid, NULL, barber, NULL);

  for (i=0; i<numCustomers; i++) {
  pthread_create(&tid[i], NULL, customer, (void *)&Number[i]);
  sleep(1);
  }

  for (i=0; i<numCustomers; i++) {
  pthread_join(tid[i],NULL);
  sleep(1);
  }

  allDone = 1;
  sem_post(&barberSleep); // Wake the barber 
  pthread_join(btid,NULL);
  return 0;
}

void *barber(void *junk) {
  while (!allDone) {
  
    int customers;
    sem_getvalue(&waitingRoom,&customers);
    if(customers==10){
      printf("The barber is sleeping \n");
      sem_wait(&barberSleep);
    }
    
    if (!allDone) {
    printf("The barber is asking the hair cut style\n");
    cuttime(rand() %4);
    printf("The barber has finished cutting hair.\n");
    sem_post(&hairCut);
    }
    else {
    printf("The barber is going home for the day.\n");
    }
  }
}

void *customer(void *number) {
  int num = *(int *)number;
  int chairs;
  int wake;
  printf("Customer %d is going to the barber shop.\n", num);
  sleep(rand()%3);
  printf("Customer %d arrived at barber shop.\n", num);

  if (sem_trywait(&waitingRoom) == -1) {
      printf("Waiting room is full. Customer %d is leaving.\n",num);
      return 0;
  }
  sem_getvalue(&waitingRoom,&chairs);
  printf("The number of empty chairs is %d\n",chairs);
  printf("Customer %d entering waiting room.\n", num);
  
  sem_wait(&barberChair);

  sem_post(&waitingRoom);
  
  sem_getvalue(&barberSleep,&wake);
  if(wake==0){
      printf("Customer %d waking the barber.\n", num);
  sem_post(&barberSleep);
  }

  sem_wait(&hairCut);

  sem_post(&barberChair);
  printf("Customer %d leaving barber shop.\n", num);
}



void cuttime(int num){
  printf("The customer want the haircut number %d\n",num);
  if (num==1){
    printf("The barber is cutting hair\n Waiting time is 500ms\n");
    sleep(500/1000);

  }else if (num==2){
     printf("The barber is cutting hair\n Waiting time is 1000ms\n");
    sleep(1);
  }else if (num==3){
     printf("The barber is cutting hair\n Waiting time is 2000ms\n");
    sleep(2);
  }else if (num==4){
     printf("The barber is cutting hair\n Waiting time is 3000ms\n");
    sleep(3);
  }
}
