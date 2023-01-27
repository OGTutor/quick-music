import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://quick-music-fs:quick-music-fs1234@cluster0.dj1syik.mongodb.net/quick-music-fs?retryWrites=true&w=majority',
        ),
        TrackModule,
    ],
})
export class AppModule {}
