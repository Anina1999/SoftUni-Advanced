import { expect } from "chai";
import { streamingServiceSelector } from "../streamingServiceSelector.js";

describe('unit tests for class streamingServiceSelector', function() {
    describe('selectingContent', () => {

        it('to pass test for "Movie" or "TV Show"', () => {
            const movieResult = streamingServiceSelector.selectingContent('Movie', 'Netflix', 'Action');
            const showResult = streamingServiceSelector.selectingContent('TV Show', 'HBO', 'Drama');

            expect(movieResult).to.equal('You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!');
            expect(showResult).to.equal('You can watch this Drama TV Show on HBO. Enjoy your Drama-filled experience!');
        });

        it('to throw for incorrect type string', () => {
            expect(() => streamingServiceSelector.selectingContent('aaa', 'any', 'Action'))
                .to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });

        it('to throw for invalid type data types', () => {
            expect(() => streamingServiceSelector.selectingContent(5, 'any', 'Drama'))
                .to.throw("We currently only support 'Movie' or 'TV Show' types.");
            expect(() => streamingServiceSelector.selectingContent([], 'any', 'Horror'))
                .to.throw("We currently only support 'Movie' or 'TV Show' types.");
            expect(() => streamingServiceSelector.selectingContent({}, 'any', 'Romance'))
                .to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });

        it('to throw for incorrect genre', () => {
            expect(() => streamingServiceSelector.selectingContent('Movie', 'aaa', 'Fantasy'))
                .to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
        });

        it('to return correct message for valid input', () => {
            const result = streamingServiceSelector.selectingContent('Movie', 'Disney+', 'Comedy');
            expect(result).to.equal('You can watch this Comedy Movie on Disney+. Enjoy your Comedy-filled experience!');
        });
    });

    describe('availablePlatforms', () => {
        const platforms = ["Netflix", "HBO", "Disney+"];

        it('to throw for non-array platforms', () => {
            expect(() => streamingServiceSelector.availablePlatforms({}, 1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms('Netflix', 1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(123, 1)).to.throw('Invalid platform selection.');
        });

        it('to throw if selectedPlatformIndex is not a number or not integer', () => {
            expect(() => streamingServiceSelector.availablePlatforms(platforms, '1')).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(platforms, 1.5)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(platforms, NaN)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(platforms, {})).to.throw('Invalid platform selection.');
        });

        it('should throw if selectedPlatformIndex is out of range', () => {
            expect(() => streamingServiceSelector.availablePlatforms(platforms, -1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(platforms, 3)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(platforms, 10)).to.throw('Invalid platform selection.');
        });

        it('should return correct string for valid input', () => {
            expect(streamingServiceSelector.availablePlatforms(platforms, 0))
                .to.equal('Other available platforms are: HBO, Disney+.');
            expect(streamingServiceSelector.availablePlatforms(platforms, 1))
                .to.equal('Other available platforms are: Netflix, Disney+.');
            expect(streamingServiceSelector.availablePlatforms(platforms, 2))
                .to.equal('Other available platforms are: Netflix, HBO.');
        });
    });
    
    describe('contentRating', () => {
        it('to throw if runtimeInMinutes is NaN or viewerRating is not a number between 0 and 10', () => {
            expect(() => streamingServiceSelector.contentRating('1', -1)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating({}, '1')).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating([], 11)).to.throw('Invalid runtime or rating.');
        });

        it('should return highly rated message if viewerRating >= 7', () => {
        expect(streamingServiceSelector.contentRating(120, 8)).to.equal('This content is highly rated (8/10) and has a runtime of 2.00 hours. Enjoy your watch!');
        });

        it('should return lower rated message if viewerRating < 7', () => {
        expect(streamingServiceSelector.contentRating(90, 5)).to.equal('This content has a lower rating (5/10) and runs for 1.50 hours. You might want to check reviews first.');
        });
    });
});